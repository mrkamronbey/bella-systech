import React from "react";
import JoinTimeline from "./join-timeline";
import JoinHero from './join-hero/index';
import RequestConsultation from '../home/request-consultation/index'


const JoinUsComponent = () => {
    return (
        <>
            <JoinHero />
            <JoinTimeline />
            <RequestConsultation />
        </>
    )
}

export default JoinUsComponent