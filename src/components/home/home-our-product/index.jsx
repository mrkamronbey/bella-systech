import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import CommonCard from '../../../common/card'
import { Col, Row } from 'react-grid-system'
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Slider from "react-slick";
import './style.css'

import CardImg from '../../../assets/card/cardimg.png'
import { useTranslation } from 'react-i18next'
import Reveal from '../../../utils/reveal/reveal'

const HomeOurProduct = () => {
    const { t } = useTranslation()
    const arr = [1, 2, 3, 4, 5, 7, 8, 9]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
            <div className={styles.home_our_product_section}>
                <WrapperContainer>
                    <div className={styles.title_box}>
                        <Reveal>
                            <h4 className={styles.home_our_title}>{t("Card.2")}</h4>
                        </Reveal>
                    </div>
                    {/* <Row className={styles.home_our_row}>
                        {
                            arr.map(() => (
                                <Col className={styles.home_our_col} lg={4} md={12} sm={12}>
                                    <CommonCard
                                        src={CardImg}
                                        card_title="Краткая информация"
                                        card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        card_btn_text1={t("Card.0")}
                                        card_btn_text2={t("Card.1")}
                                        details="#"
                                        order="#"
                                        isBtn={true}
                                        isTitle={true}
                                    />
                                </Col>
                            ))
                        }
                    </Row> */}

                    <Slider {...settings}>
                        {
                            arr.map(() => (
                                <div className='slider_card_box'>
                                    <CommonCard
                                        src={CardImg}
                                        card_title="Краткая информация"
                                        card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        card_btn_text1={t("Card.0")}
                                        card_btn_text2={t("Card.1")}
                                        details="#"
                                        order="#"
                                        isBtn={true}
                                        isTitle={true}
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </WrapperContainer>
            </div>
        </>
    )
}

export default HomeOurProduct