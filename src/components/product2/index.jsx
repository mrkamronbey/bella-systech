import React from 'react'
import DescriptionProduct from './description'
import ProductContent from './product_content'
import { PereparatGet } from '../../redux/pereparat';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product2Component = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(PereparatGet())
  }, [])
  const dataproduct = useSelector(state => state.pereparat.PereparatGet.data)
  const dataproductfilter = dataproduct.filter(e => e.id == id)
  return (
    <>
      <ProductContent dataproductfilter={dataproductfilter}/>
      <DescriptionProduct dataproductfilter={dataproductfilter}/>
    </>
  )
}

export default Product2Component