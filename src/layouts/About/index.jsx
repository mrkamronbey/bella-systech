import React, { useEffect } from 'react'
import AboutUsComponent from '../../components/aboutus/index'
import { Helmet, HelmetProvider } from "react-helmet-async";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title> О нас </title>
          <meta name='description' content="Complete information about the company's activities" />
          <link rel="cononical" href="/about" />
        </Helmet>
        <AboutUsComponent />
      </HelmetProvider>
    </>
  )
}

export default About