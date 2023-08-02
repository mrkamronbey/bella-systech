import React, {useEffect} from 'react'
import CategoryComponent from '../../components/category'

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <><CategoryComponent /></>
  )
}

export default Category