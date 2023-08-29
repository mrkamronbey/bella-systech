import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Reveal from '../../../utils/reveal/reveal';
import './style.css'
import Slider from "react-slick";
import { PartnersGet } from '../../../redux/partners';


import PartnerImg1 from '../../../assets/partner/partner-logo1.png'
import PartnerImg2 from '../../../assets/partner/partner-logo2.png'
import PartnerImg3 from '../../../assets/partner/partner-logo3.png'
import PartnerImg4 from '../../../assets/partner/partner-logo4.png'
import PartnerImg5 from '../../../assets/partner/partner-logo5.png'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Col, Row } from 'react-grid-system';



const OurPartner = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(PartnersGet())
  }, [])
  const partnerGetState = useSelector((state) => state.partners.PartnersGet?.data)
  console.log(partnerGetState, 'partners')
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          cssEase: "linear",
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
            {
              partnerGetState.length >= 4 ? (
                <Slider {...settings}>
                  {
                    partnerGetState.map(elem => (
                      <div className='slider_link_box'>
                        {/* <NavLink className='slider_link' to="#"> */}
                        <img src={elem.logo} alt="" />
                        {/* </NavLink> */}
                      </div>
                    ))
                  }
                </Slider>
              ) : (
                <Row style={{ margin: "0" }}>
                  {
                    partnerGetState.slice(0, 4).map(elem => (
                      <Col lg={3} className='partners_img_col'>
                        <img src={elem.logo} alt="" />
                      </Col>
                    ))
                  }
                </Row>

              )
            }
          </div>
        </WrapperContainer>
      </div>
    </>
  )
}

export default OurPartner