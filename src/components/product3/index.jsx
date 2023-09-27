import React from 'react'
import DescriptionProduct from './description'
import ProductContent from './product_content'
import { CosmeticsGet } from '../../redux/cosmetic';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product3Component = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(CosmeticsGet())
  }, [])
  const dataproduct = useSelector(state => state.cosmetics.CosmeticsGet?.data)
  const dataproductfilter = dataproduct.filter(e => e.id == id)
  return (
    <>
      <ProductContent dataproductfilter={dataproductfilter}/>
      <DescriptionProduct dataproductfilter={dataproductfilter}/>
    </>
  )
}

export default Product3Component