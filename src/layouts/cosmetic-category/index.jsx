import React, { useEffect } from 'react'
import CosmeticCategoryComponent from '../../components/cosmetic-category';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CosmeticCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Cosmetics Category</title>
          <meta name='description' content="Cosmetics category" />
          <link rel="cononical" href="/category-pereparat" />
        </Helmet>
        <CosmeticCategoryComponent />
      </HelmetProvider>
    </>
  );
};


export default CosmeticCategory;
