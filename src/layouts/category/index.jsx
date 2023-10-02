import React, { useEffect } from 'react'
import CategoryComponent from '../../components/category'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Косметика и оборудование для салонов красоты Ташкент</title>
          <meta name='description' content="Category Aparat" />
          <link rel="cononical" href="/category" />
        </Helmet>
        <CategoryComponent />
      </HelmetProvider>
    </>
  );
};


export default Category;
