'use client'
import ProductApis from '../../_utils/ProductApis'
import BreadCrumb from '../../_component/breadCrumb'
import ProductDetails from '../_components/productDetails'
import ProductBanner from '../_components/productBanner'
import React, { useEffect, useState } from 'react'
import ProductByCategoty from '../../_component/productByCategory'
import { usePathname } from 'next/navigation'

function ProductInfos({ params }) {

  const path = usePathname();
  
  const [dataProductDetails, setDataProductDetails] = useState({})
  const [productList, setProductList] = useState({})
  useEffect(() => {
    getProductById_()
  }, [params?.productId])

  const getProductById_ = () => {
    ProductApis.getProductById(params?.productId)
      .then(res => {
        console.log(res.data.data)
        setDataProductDetails(res.data.data)
        getProductByCategory_(res.data.data)
      })
  }

  const getProductByCategory_ = (product) =>{
    ProductApis.getProductByCategory(product?.attributes?.category)
    .then(res => {
      console.log(res.data.data)
      setProductList(res.data.data)
    })
  }

  console.log(productList)
  return (
    <div className='px-10 py-8 md:px-28' >
      <BreadCrumb path={path} />
      <div className='grid mt-10 mb-10 gap-5 sm:gap-0 justify-around grid-cols-1 sm:grid-cols-2 '>
        <ProductBanner product={dataProductDetails}/>
        <ProductDetails product={dataProductDetails}/>
      </div>
      <div>
        <h2 className='mt-25 text-xl mb-5'>Similar Products</h2>
        <ProductByCategoty product={productList} />
      </div>
    </div>
  )
}

export default ProductInfos