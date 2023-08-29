import React from "react";
import HomeHeroSlider from "./hero-slider";
import HeroVideo from "./hero-video";
import HomeOurProduct from "./home-our-product";
import HomeThird from "./home-third";
import HomeOurCosmetics from "./home-ourcosmetics/index";
import OurPartner from "./our-partner";
import News from "./news";
import RequestConsultation from "./request-consultation";

import RegisterSlider from "./register-slider";

const HomeComponentent = () => {
    return (
        <>

            <HomeHeroSlider />
            <HeroVideo />
            <HomeOurProduct />
            <HomeThird />
            <HomeOurCosmetics />
            <OurPartner />
            <News />
            <RegisterSlider />
            <RequestConsultation />
        </>
    )
}

export default HomeComponentent
