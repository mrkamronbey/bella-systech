import React, {useEffect} from 'react'
import HistolabComponent from '../../../components/companies/histolab'

const Histolab = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <HistolabComponent/>
    </div>
  )
}

export default Histolab