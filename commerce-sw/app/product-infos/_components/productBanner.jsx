import React from 'react'
import Image from 'next/image'


function ProductBanner({product}) {

  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ? 
      <Image
      src={product?.attributes?.banner?.data?.attributes?.url}
      alt='banner-datails-infos'
      width={400}
      height={400}
      className='rounded-lg object-cover max-h-[300px] '
      />
       :
      <div className='w-[350px] h-[233px] bg-slate-200 rounded-lg ' ></div>

      } 
    </div>
  )
}

export default ProductBanner
