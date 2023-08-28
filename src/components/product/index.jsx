import React, { useEffect } from 'react'
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
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AparatProductGet } from '../../redux/product-aparat'

const ProductComponent = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AparatProductGet())
  }, [])
  const dataproduct = useSelector(state => state.aparatproduct.AparatProductGet.data)
  const dataproductfilter = dataproduct.filter(e => e.id == id)

  return (
    <>
      <ProductContent dataproductfilter={dataproductfilter}/>
      <DescriptionProduct dataproductfilter={dataproductfilter}/>
      <PremiumProduct dataproductfilter={dataproductfilter}/>
      <ProductApplication dataproductfilter={dataproductfilter}/>
      <Procedura dataproductfilter={dataproductfilter}/>
      <Parametr dataproductfilter={dataproductfilter}/>
      <BeforeAfter dataproductfilter={dataproductfilter}/>
      <Buying dataproductfilter={dataproductfilter}/>
      <OurCustumer dataproductfilter={dataproductfilter}/>
      <RequestConsultation dataproductfilter={dataproductfilter}/>
    </>
  )
}

export default ProductComponent