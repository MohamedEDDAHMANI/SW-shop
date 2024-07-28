import React from 'react'
import ProductHome from './productHome'
import ProductFemme from './productFemme'

function ProductList({productList}) {
  const HomeProducts = productList.filter((product) => product?.attributes?.category === 'MALE')
  const FemmeProducts = productList.filter((productList) => productList?.attributes?.category === 'FEMALE')
  
  return (
    <div>  

      <ProductHome HomeProducts={HomeProducts} />
      <ProductFemme FemmeProducts={FemmeProducts} />

    </div>
  )
}

export default ProductList
