'use client'
import React, { useContext } from 'react'
import {AlertOctagon, ShoppingCart, BadgeCheck} from 'lucide-react'
import { useUser } from '@clerk/nextjs';
import CardApi from '../../_utils/cardApi'
import SkeletonProductInfo from '../../product-infos/_components/skeletonProductInfo'
import { useRouter } from 'next/navigation';
import { CardContext } from '../../_context/CardContext';

function ProductDetails({product}) {

  const {card, setCard} = useContext(CardContext);
  const router = useRouter()
  const {user} = useUser();
  const handelAddToCard = () => {
    if(!user){
      router.push('/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fsing-in')
    }else{
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product?.id],
        }
      }
      console.log(data)
      CardApi.addToCard(data).then(res => {
        console.log('secssecfelly')
        setCard(oldCard => [
          ...oldCard,
          {
            id:res?.data?.data?.id,
            product
          }
        ])
      }).catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <div>
      {product?.id
       ?
       <div>
        <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
       <h2 className='text-[15px] text-primary'>{product?.attributes?.category}</h2>
       <h2 className='text-[15px] mt-5 text-gray-800'>{product?.attributes?.description[0]?.children[0]?.text}</h2>
       <h2 className='text-[11px] text-gray-500 flex gap-2 mt-2 items-center  '>
         {product?.attributes?.delivery ? <BadgeCheck className='text-green-500 h-5 w-5'/> : <AlertOctagon /> }
         Eligible For Instant Delivery
       </h2>
       <h2 className='text-[32px] mt-3 text-gray-800'>${product?.attributes?.price}</h2>
       <button onClick={() => handelAddToCard()} className='flex gap-2 p-3 text-white bg-primary hover:bg-pink-500 rounded-lg'><ShoppingCart />Add to cart</button>
       </div>
       :
      <SkeletonProductInfo />
       }
    </div>

  )
}

export default ProductDetails
