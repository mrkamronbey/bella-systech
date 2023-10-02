import React, { useEffect } from 'react'
import CategoryPereparatComponent from '../../components/category-pereparat';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CategoryPereparat = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Профессиональная косметика Ташкент</title>
          <meta name='description' content="Category Pereparat" />
          <link rel="cononical" href="/category-pereparat" />
        </Helmet>
        <CategoryPereparatComponent />
      </HelmetProvider>
    </>
  );
};


export default CategoryPereparat;
