import React, { useEffect } from 'react'
import HistolabComponent from '../../../components/companies/histolab'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Histolab = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Company Histolab</title>
          <meta name='description' content="Company Histolab" />
          <link rel="cononical" href="/companies/histolab" />
        </Helmet>
        <HistolabComponent />
      </HelmetProvider>

    </>
  )
}

export default Histolab