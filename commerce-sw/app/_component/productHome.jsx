import React from 'react'
import ProductItem from './productItem'

function ProductHome({ HomeProducts }) {
  
  return (

    <>
      <h1 className=" mb-4 text-2xl font-bold pl-2 ss:pl-4 sm:pl-4 md:pl-7 lg:pl-12">MEN SECTION</h1>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
      {HomeProducts.map(product  => (
        <ProductItem key={product.id} product={product}  />
      ))}
      </div>
    </>


  )
}

export default ProductHome
