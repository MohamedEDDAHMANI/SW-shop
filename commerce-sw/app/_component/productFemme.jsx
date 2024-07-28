import React from 'react'
import ProductItem from './productItem'


function productFemme({ FemmeProducts }) {

  return (

    <>
      <h1 className=" mb-4 mt-10 text-2xl font-bold pl-2 ss:pl-4 sm:pl-4 md:pl-7 lg:pl-12 ">WOMEN SECTION</h1>
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
        {FemmeProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>

  )
}

export default productFemme
