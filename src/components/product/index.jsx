import React from 'react'
import BeforeAfter from './befor_after'
import Buying from './buying'
import DescriptionProduct from './description'
import Parametr from './parametr'
import PremiumProduct from './premium_product'
import Procedura from './procedure_product'
import ProductApplication from './product_application'
import ProductContent from './product_content'
import OurCustumer from './our-customer/index'
import RequestConsultation from '../home/request-consultation/index'

const ProductComponent = () => {
  return (
    <>
      <ProductContent />
      <DescriptionProduct />
      <PremiumProduct />
      <ProductApplication />
      <Procedura />
      <Parametr />
      <BeforeAfter />
      <Buying />
      <OurCustumer />
      <RequestConsultation />
    </>
  )
}

export default ProductComponent