import React, {useEffect} from 'react'
import LasemdComponent from '../../../components/companies/lasemd'

const Lasemd = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <LasemdComponent/>
    </div>
  )
}

export default Lasemd