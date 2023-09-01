import React, { useEffect } from 'react'
import LasemdComponent from '../../../components/companies/lasemd'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Lasemd = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Company Juvelook or Lenisna</title>
          <meta name='description' content="Company Juvelook or Lenisna" />
          <link rel="cononical" href="/companies/juvelook" />
        </Helmet>
        <LasemdComponent />
      </HelmetProvider>

    </div>
  )
}

export default Lasemd