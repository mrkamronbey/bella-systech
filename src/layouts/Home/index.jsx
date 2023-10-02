import React, { useEffect } from 'react'
import HomeComponentent from '../../components/home/index';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Bella-systech Uzbekistan</title>
          <meta name='description' content="Home page" />
          <link rel="cononical" href="/" />
        </Helmet>
        <HomeComponentent />
      </HelmetProvider>

    </>
  )
}

export default Home