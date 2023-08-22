import React, {useEffect} from 'react'
import SkinwellComponent from '../../../components/companies/skinwell'

const Skinwell = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <SkinwellComponent/>
    </>
  )
}

export default Skinwell