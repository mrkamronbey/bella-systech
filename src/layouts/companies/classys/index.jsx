import React, { useEffect } from 'react'
import HomeHero from '../../../common/hero'
import ClassysCompainesComponent from '../../../components/companies/classys/index'

const ClassysCompaines = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <ClassysCompainesComponent />
    </>
  )
}

export default ClassysCompaines