import React, { useEffect } from 'react'
import UltraFormerComponent from '../../../components/companies/ultrafarm'

const UltraFormer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <UltraFormerComponent />
    </div>
  )
}

export default UltraFormer