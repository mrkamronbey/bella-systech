import React, {useEffect} from 'react'
import BialogComponent from '../../../components/companies/bialob'

const Bialog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <BialogComponent/>
    </div>
  )
}

export default Bialog