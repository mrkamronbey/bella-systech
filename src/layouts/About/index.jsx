import React , {useEffect} from 'react'
import AboutUsComponent from '../../components/aboutus/index'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <AboutUsComponent />
    </>
  )
}

export default About