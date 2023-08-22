import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import CommonCard from '../../../common/card'
import './style.css'
import Reveal from '../../../utils/reveal/reveal'

import CardImg from '../../../assets/card/cardimg1.png'
import { useTranslation } from 'react-i18next'
import Slider from "react-slick";

const HomeOurCosmetics = () => {
    const { t } = useTranslation()
    const arr = [1, 2, 3, 4, 5, 7, 8, 9]
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        speed: 2500,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: false,
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
            <div className={styles.home_our_cosmetics_section}>
                <WrapperContainer>
                    <div className={styles.title_box}>
                        <Reveal>
                            <h4 className={styles.home_cosmetics_title}>{t("Card.3")}</h4>
                        </Reveal>
                    </div>
                    <div className='ourcosmetics_slider_wrapp'>
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
                                            details="/product"
                                            order="#"
                                            isBtn={true}
                                            isTitle={true}
                                            style={{
                                                aspectRatio: 4 / 3,
                                                width: '100%'
                                              }}
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default HomeOurCosmetics