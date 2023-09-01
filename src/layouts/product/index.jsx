import React, { useEffect } from 'react'
import ProductComponent from '../../components/product'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product Aparat</title>
          <meta name='description' content="Product Aparat" />
          <link rel="cononical" href="/product" />
        </Helmet>
        <ProductComponent />
      </HelmetProvider>

    </>
  )
}

export default Product