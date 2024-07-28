import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function productItem({product}) {

  return (
          <Link href={`/product-infos/${product?.id}`} className=" rounded-lg p-4 shadow-sm shadow-indigo-100 transform transition duration-300 ease-in-out  hover:scale-105">

            <Image
              src={product?.attributes?.banner?.data?.attributes?.url}
              alt="'banner-card"
              width={400}
              height={350}
              className="h-56 w-full rounded-t-md object-cover transform transition duration-300 ease-in-out hover:scale-105"
              />

            <div className="mt-2 ">
              <dl>
                <div>
                  <dt className="sr-only ">Price</dt>

                  <dd className="text-sm text-gray-500 ">${product?.attributes?.price}</dd>
                </div>

                <div>
                  <dt className="sr-only">Title</dt>

                  <dd className="font-medium line-clamp-1">{product?.attributes?.title}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center justify-around text-xs ">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    className="size-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Delivery</p>

                    <p className={`font-medium ${product?.attributes?.delivery ? 'text-blue-500' : 'text-red-500'}`}>{product?.attributes?.delivery?.toString()}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <svg
                    className="size-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>

                  <div className="mt-1.5 sm:mt-0 ">
                    <p className="text-gray-500">Category</p>

                    <p className="font-medium">{product?.attributes?.category}</p>
                  </div>
                </div>

              </div>
            </div>
          </Link>
  )
}

export default productItem
