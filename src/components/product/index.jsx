import React from 'react'
import BeforeAfter from './befor_after'
import Buying from './buying'
import DescriptionProduct from './description'
import Parametr from './parametr'
import PremiumProduct from './premium_product'
import Procedura from './procedure_product'
import ProductApplication from './product_application'
import ProductContent from './product_content'

const ProductComponent = () => {
  return (
    <>
      <ProductContent/>
      <DescriptionProduct/>
      <Parametr/>
      <PremiumProduct/>
      <ProductApplication/>
      <Procedura/>
      <BeforeAfter/>
      <Buying/>
    </>
  )
}

export default ProductComponent