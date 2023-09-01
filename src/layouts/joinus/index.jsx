import React, { useEffect } from 'react'
import JoinUsComponent from '../../components/joinus'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const JoinUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Join Us</title>
                    <meta name='description' content="Join Us page" />
                    <link rel="cononical" href="/join" />
                </Helmet>
                <JoinUsComponent />
            </HelmetProvider>

        </>
    )
}

export default JoinUs