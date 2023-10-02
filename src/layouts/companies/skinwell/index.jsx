import React, { useEffect } from 'react'
import SkinwellComponent from '../../../components/companies/skinwell'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Skinwell = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Маски от Skinwell</title>
          <meta name='description' content="Company Skinwell" />
          <link rel="cononical" href="/companies/skinwell" />
        </Helmet>
        <SkinwellComponent />
      </HelmetProvider>
    </>
  )
}

export default Skinwell