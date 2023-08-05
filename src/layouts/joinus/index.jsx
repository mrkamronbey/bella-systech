import React, { useEffect } from 'react'
import JoinUsComponent from '../../components/joinus'

const JoinUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <JoinUsComponent />
        </>
    )
}

export default JoinUs