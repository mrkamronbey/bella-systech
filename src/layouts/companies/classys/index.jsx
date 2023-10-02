import React, { useEffect } from 'react'
import HomeHero from '../../../common/hero'
import ClassysCompainesComponent from '../../../components/companies/classys/index'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const ClassysCompaines = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Косметологическое оборудовние Classys</title>
          <meta name='description' content="Company Classys" />
          <link rel="cononical" href="/companies/classys" />
        </Helmet>
        <ClassysCompainesComponent />
      </HelmetProvider>
    </>
  )
}

export default ClassysCompaines