
import React, { useEffect } from 'react'
import ContactComponent from "../../components/contact";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Contact</title>
          <meta name='description' content="Company contacts" />
          <link rel="cononical" href="/contact" />
        </Helmet>
        <ContactComponent />
      </HelmetProvider>
    </>
  );
}

export default Contact;
