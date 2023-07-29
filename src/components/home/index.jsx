import React from 'react'
import HomeHeroSlider from './hero-slider'
import HeroVideo from './hero-video'
import HomeOurProduct from './home-our-product'
import HomeThird from './home-third'
import HomeOurCosmetics from './home-our-cosmetics'
import OurPartner from './our-partner'
import News from './news'
import RegisterSlider from './register-slider'

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
        </>
    )
}

export default HomeComponentent