import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { CardContext } from '../../_context/CardContext';
import { useUser } from '@clerk/nextjs';
import cardApi from '../../_utils/cardApi';
import ordersApi from '../../_utils/ordersApi'

const CheckoutForm = ({amount}) => {
  const {card, setCard} = useContext(CardContext)
  const {user} = useUser()
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState()

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const handleError = (error)=>{
      setLoading(false)
      setErrorMessage(error.message) 
    }

    await createOrder();
    await sendEmail();


    const {error: submitError} = await elements.submit();
    if (submitError){
      handleError(submitError);
      return;
    }

    const res = await fetch('api/create-intent',{
      method:'POST',
      body: JSON.stringify({
        amount: amount
      })
    })
    const clientSecret = await res.json()
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-confirm",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };
  const createOrder = async () =>{
    let productIds = [];
    card.forEach(el=>{
      productIds.push(el?.product?.id)
    })
    const data = {
      data:{
        email: user.primaryEmailAddress.emailAddress,
        username: user.fullName,
        amount,
        products: productIds
      }
    }
    
    
    try {
      const response = await ordersApi.createOrder(data);
      console.log('Response:', response);
      if (response) {
        card.forEach(el => {
          console.log('id ----',el?.id)
          cardApi.deleteItemFromCard(el?.id)
          .then(result => {
            console.log('Deleted result:', result);
          }).catch(err => {
            console.error('Error deleting item from card:', err);
          });
        });
      }
    } catch (err) {
      console.error('Error creating order:', err.response ? err.response.data : err.message);
    }


  }
  const sendEmail = async () => {
    try {
      const res = await fetch('api/send-email',{ 
        method:'POST',
        body: JSON.stringify({ fullName: user.fullName }),
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-32 md:mx-[320px] mt-12'>
      <PaymentElement />
      <button className='w-full p-2 mt-4 text-white bg-primary rounded-md '>Submit</button>
      </div>
    </form>
  );
};

export default CheckoutForm;