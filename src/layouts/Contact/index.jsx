
import React, {useEffect} from 'react'
import ContactComponent from "../../components/contact";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <ContactComponent />
    </>
  );
}

export default Contact;
