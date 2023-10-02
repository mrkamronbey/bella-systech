import React, { useEffect } from 'react'
import BenefitsComponent from '../../components/benefits'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Benefits = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Косметологические решения из Кореи</title>
                    <meta name='description' content="Company benefits" />
                    <link rel="cononical" href="/benefits" />
                </Helmet>
                <BenefitsComponent />
            </HelmetProvider>
        </>
    )
}

export default Benefits