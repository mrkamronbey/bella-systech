import React, {useEffect} from 'react'
import HomeHero from '../../../common/hero'
import LutronicCompainesComponent from '../../../components/companies/lutronic'

const LutronicCompaines = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <LutronicCompainesComponent/>
    </>
  )
}

export default LutronicCompaines