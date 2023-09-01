import React from 'react'
import Product2Component from '../../components/product2/index'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Product2 = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product Preparat</title>
          <meta name='description' content="Product Preparat" />
          <link rel="cononical" href="/product2" />
        </Helmet>
        <Product2Component />
      </HelmetProvider>
      
    </>
  )
}

export default Product2