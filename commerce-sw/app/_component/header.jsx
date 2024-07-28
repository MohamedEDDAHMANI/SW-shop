'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import {SignInButton,SignedIn,SignedOut,UserButton} from "@clerk/nextjs";
import { useUser } from '@clerk/nextjs';
import  Card from './card';
import { ShoppingCart } from 'lucide-react';
import { CardContext } from '../_context/CardContext';
import cardApi from '../_utils/cardApi';

function Header() {
    const {user} = useUser();
    const [openCard, setOpenCard] = useState(false)

    const {card, setCard} = useContext(CardContext)
    const [isLogedIn, setIsLogedIn] = useState(false)
    useEffect(()=> {
        setIsLogedIn(window.location.href.toString().includes('sign-in?redirect'))
    },[])

    useEffect(() =>{
        user&&getUserCardsItems_()
    },[user])

    const getUserCardsItems_ = () => {
        cardApi.getUserCardsItems(user.primaryEmailAddress.emailAddress).then(res => {
            console.log(res?.data?.data)
            res?.data?.data.forEach(cardItem =>{
                setCard((oldCard) => [
                    ...oldCard,
                    {
                        id: cardItem.id,
                        product: cardItem?.attributes?.products?.data[0]
                    }
                ])
            })
        }).catch(err => {
            console.log(err)
        })
    }

    return !isLogedIn && (
        <header className="bg-white h-16">
            <div className="mx-auto flex h-full max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
                <Image src='/logo.svg' alt='' width={50} height={50} />

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Explore </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About Us </a>
                            </li>

                            <li>
                                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Contact Us </a>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        {!user ?
                        <div className=" hidden  sm:gap-4 md:flex ">
                            <a
                                className=" rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-800"
                                href="#"
                            >
                                <SignedOut><SignInButton /></SignedOut>
                                <SignedIn><UserButton /></SignedIn>
                                
                            </a>

                            <a
                                className="rounded-md  bg-gray-100 px-5 py-2.5  text-sm font-medium text-primary  transition hover:text-pink-400/75 sm:block"
                                href="#"
                            >
                                Register
                            </a>
                        </div>
                        :
                        <div className='flex items-center gap-5 ' onClick={() => setOpenCard(!openCard)}>
                            <h2 className='flex gap-2 cursor-pointer'><ShoppingCart />({card?.length}) </h2>
                            <UserButton />
                            {openCard && <Card />}
                        </div>
                    }

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
