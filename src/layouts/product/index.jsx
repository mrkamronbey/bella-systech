import React, { useEffect } from 'react'
import ProductComponent from '../../components/product'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <ProductComponent />
    </>
  )
}

export default Product