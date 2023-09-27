import React, { useEffect } from 'react'
import Product3Component from '../../components/product3/index'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Product3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Product Cosmetics</title>
          <meta name='description' content="Product Cosmetics" />
          <link rel="cononical" href="/product2" />
        </Helmet>
        <Product3Component />
      </HelmetProvider>

    </>
  )
}

export default Product3