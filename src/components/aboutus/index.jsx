import React from "react";
import styles from './style.module.css'
import AboutHero from "./about-hero";
import AboutSecond from "./about-second";
import AboutCard from "./about-card";
import OurPartner from '../../components/home/our-partner/index'
import News from '../../components/home/news/index'
import RegisterSlider from '../../components/home/register-slider/index'
import RequestConsultation from '../../components/home/request-consultation/index'
import Certificate from "./certificate";
import OurCustumer from "./our-customer";

const AboutUsComponent = () => {
    return (
        <>
            <AboutHero />
            <AboutSecond />
            <AboutCard />
            <Certificate />
            <OurPartner />
            <News />
            {/* <OurCustumer /> */}
            <RegisterSlider />
            <RequestConsultation />
        </>
    )
}

export default AboutUsComponent