'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './productList'
import ProductApis from '../_utils/ProductApis'


function ProductsSection() {

  const [productList, setProductList] = useState([])
  
    useEffect(()=>{
        getLatestProducts_();
    },[])
    const getLatestProducts_ = () => {
        ProductApis.getLatestProducts()
        .then(res=>{
          console.log('helllo')
          setProductList(res.data.data)
        }).catch(err =>{
          console.log('the error is:' + err)
        })
    }

    console.log('productList', productList)
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  )
}

export default ProductsSection
