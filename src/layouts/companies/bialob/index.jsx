import React, { useEffect } from 'react'
import BialogComponent from '../../../components/companies/bialob'
import { HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet-async';

const Bialog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Профессиональная косметик от Biolab</title>
          <meta name='description' content="Company Biolab" />
          <link rel="cononical" href="/companies/biolab" />
        </Helmet>
        <BialogComponent />
      </HelmetProvider>
    </>
  )
}

export default Bialog