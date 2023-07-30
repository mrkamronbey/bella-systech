import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
// import 'swiper/css';
// import 'swiper/css/pagination';
import './style.css'
import Slider from "react-slick";


import PartnerImg1 from '../../../assets/partner/partner-logo1.png'
import PartnerImg2 from '../../../assets/partner/partner-logo2.png'
import PartnerImg3 from '../../../assets/partner/partner-logo3.png'
import PartnerImg4 from '../../../assets/partner/partner-logo4.png'
import PartnerImg5 from '../../../assets/partner/partner-logo5.png'
import { NavLink } from 'react-router-dom';
import Reveal from '../../../utils/reveal/reveal';


const OurPartner = () => {
  const { t } = useTranslation()
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className={styles.ourpartner_section}>
        <WrapperContainer>
          <div className={styles.ourpartner_content}>
            <Reveal>
              <h4 className={styles.ourpartner_title}>{t("OurPartner.0")}</h4>
            </Reveal>
            <Reveal>
              <p className={styles.ourpartner_text}>{t("OurPartner.1")}</p>
            </Reveal>
          </div>
          <div className='slider_wrapp'>
            <Slider {...settings}>
              <div className='slider_link_box'>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg1} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg2} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg5} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg5} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg1} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg2} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg3} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg4} alt="" />
                </NavLink>
              </div>
              <div>
                <NavLink className='slider_link' to="#">
                  <img src={PartnerImg5} alt="" />
                </NavLink>
              </div>
            </Slider>
          </div>
        </WrapperContainer>
      </div>
    </>
  )
}

export default OurPartner