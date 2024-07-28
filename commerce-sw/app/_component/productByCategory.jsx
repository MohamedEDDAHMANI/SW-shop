import React from 'react'
import ProductItem from './productItem';

function productByCategoris({product}) {
  if (!Array.isArray(product) || product.length === 0) {
    return <p>No similar products available.</p>;
  }
  return (
    <>
    <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'>
    {product.map(product  => (
        <ProductItem key={product.id} product={product}  />
      ))}
    </div>
  </>
  )
}

export default productByCategoris
