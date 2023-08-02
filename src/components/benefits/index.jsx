import React from 'react'
import BenefitsHero from './benefits-hero'
import BenefitsCount from './benefits-count'
import BenefitsCard from './benefits-card'
import BenefitsVideo from './benefits-video'
import RegisterSlider from '../home/register-slider/index'
import RequestConsultation from '../home/request-consultation'

const BenefitsComponent = () => {
    return (
        <>
            <BenefitsHero />
            <BenefitsCount />
            <BenefitsCard />
            <BenefitsVideo />
            <RegisterSlider />
            <RequestConsultation />
        </>
    )
}

export default BenefitsComponent