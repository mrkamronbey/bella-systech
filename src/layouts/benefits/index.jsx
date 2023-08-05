import React, {useEffect} from 'react'
import BenefitsComponent from '../../components/benefits'

const Benefits = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <BenefitsComponent />
        </>
    )
}

export default Benefits