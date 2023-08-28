import React, {useEffect} from 'react'
import CategoryPereparatComponent from '../../components/category-pereparat';

const CategoryPereparat = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CategoryPereparatComponent />
    </>
  );                                          
};


export default CategoryPereparat;
