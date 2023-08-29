import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import CommonCard from '../../../common/card'
import './style.css'
import Reveal from '../../../utils/reveal/reveal'
import { PereparatGet } from '../../../redux/pereparat'

import { useTranslation } from 'react-i18next'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Col, Row } from 'react-grid-system'

const HomeOurCosmetics = () => {
    const { t } = useTranslation()
    const arr = [1, 2, 3, 4, 5, 7, 8, 9]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PereparatGet())
    }, [])
    const preparatGetState = useSelector((state) => state.pereparat.PereparatGet?.data)
    console.log(preparatGetState, 'preparat')
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
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
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
                        {
                            preparatGetState.length >= 3 ? (
                                <Slider {...settings}>
                                    {
                                        preparatGetState.map((elem) => (
                                            <div className='slider_card_box'>
                                                <CommonCard
                                                    width="100%"
                                                    src={elem.image1}
                                                    card_title={
                                                        LanguValue() == 'uz' ? elem.name_uz : LanguValue() == 'en' ? elem.name_en : LanguValue() == 'ru' ? elem.name_ru : null
                                                    }
                                                    card_description={
                                                        LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 150)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 150)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 150)}...` : null
                                                    }
                                                    card_btn_text1={t("Card.0")}
                                                    card_btn_text2={t("Card.1")}
                                                    details={`/product/${elem.id}`}
                                                    order="#"
                                                    isBtn={true}
                                                    isTitle={true}
                                                    style={{
                                                        aspectRatio: 3 / 4,
                                                        width: '100%',
                                                        height: "400px"
                                                    }}
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            ) : (
                                <Row style={{ margin: "0" }}>
                                    {
                                        preparatGetState.slice(0, 3).map(elem => (
                                            <Col lg={4}>
                                                <CommonCard
                                                    width="100%"
                                                    src={elem.image1}
                                                    card_title={
                                                        LanguValue() == 'uz' ? elem.name_uz : LanguValue() == 'en' ? elem.name_en : LanguValue() == 'ru' ? elem.name_ru : null
                                                    }
                                                    card_description={
                                                        LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 150)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 150)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 150)}...` : null
                                                    }
                                                    card_btn_text1={t("Card.0")}
                                                    card_btn_text2={t("Card.1")}
                                                    details={`/product/${elem.id}`}
                                                    order="#"
                                                    isBtn={true}
                                                    isTitle={true}
                                                />
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

export default HomeOurCosmetics