import React, { useEffect } from 'react'
import HomeHero from '../../../common/hero'
import LutronicCompainesComponent from '../../../components/companies/lutronic'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const LutronicCompaines = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Профессиональня оборудовние Lutronic</title>
          <meta name='description' content="Company Lutronic" />
          <link rel="cononical" href="/companies/lutronic" />
        </Helmet>
        <LutronicCompainesComponent />
      </HelmetProvider>
    </>
  )
}

export default LutronicCompaines