import React from 'react'
import styles from "./style.module.css"
import { useTranslation } from 'react-i18next'
import CommonCard from '../../../../common/card'
import "./style.css"
import Slider from "react-slick";
import { Col, Row } from 'react-grid-system'
const Card = ({ filterCompany }) => {
    const { t } = useTranslation()
    const data = [1, 2, 3, 4, 5]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        speed: 2500,
        autoplaySpeed: 5000,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
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
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <div className={styles.box}>
                    <h2>{t("Compaines.2")}</h2>
                    <div className='ourproduct_slider_wrapp'>
                        {
                            filterCompany.map(elem => elem.pereparat.length >= 3 ? <Slider {...settings}>
                                {
                                    filterCompany.map(elem => elem.pereparat?.map(item => (
                                        <div className='slider_card_box'>
                                            <CommonCard
                                                width="90%"
                                                src={item.image1}
                                                card_title={
                                                    LanguValue() == 'uz' ? `${item.name_uz.slice(0, 20)}...` : LanguValue() == 'ru' ? `${item.name_ru.slice(0, 20)}...` : LanguValue() == 'en' ? `${item.name_en.slice(0, 20)}...` : `${item.name_ru.slice(0, 20)}...`
                                                }
                                                card_description={
                                                    LanguValue() == 'uz' ?
                                                        `${item.description_uz.slice(0, 60)}...` :
                                                        LanguValue() == 'ru' ?
                                                            `${item.description_ru.slice(0, 60)}...` :
                                                            LanguValue() == 'en' ?
                                                                `${item.description_en.slice(0, 60)}...` : `${item.description_ru.slice(0, 60)}...`
                                                }

                                                card_btn_text1={t("Card.0")}
                                                card_btn_text2={t("Card.1")}
                                                details={`/product2/${item.id}`}
                                                order="/contact"
                                                isBtn={true}
                                                isTitle={true}
                                            />
                                        </div>
                                    )))
                                }
                            </Slider> : <Row style={{ margin: "0" }}>
                                {
                                    filterCompany.map(elem => elem.pereparat?.map(item => (
                                        <Col lg={4}>
                                            <CommonCard
                                                width="100%"
                                                src={item.image1}
                                                card_title={
                                                    LanguValue() == 'uz' ? `${item.name_uz.slice(0, 20)}...` : LanguValue() == 'ru' ? `${item.name_ru.slice(0, 20)}...` : LanguValue() == 'en' ? `${item.name_en.slice(0, 20)}...` : `${item.name_ru.slice(0, 20)}...`
                                                }
                                                card_description={
                                                    LanguValue() == 'uz' ?
                                                        `${item.description_uz.slice(0, 60)}...` :
                                                        LanguValue() == 'ru' ?
                                                            `${item.description_ru.slice(0, 60)}...` :
                                                            LanguValue() == 'en' ?
                                                                `${item.description_en.slice(0, 60)}...` : `${item.description_ru.slice(0, 60)}...`
                                                }

                                                card_btn_text1={t("Card.0")}
                                                card_btn_text2={t("Card.1")}
                                                details={`/product2/${item.id}`}
                                                order="/contact"
                                                isBtn={true}
                                                isTitle={true}
                                            />
                                        </Col>
                                    )))
                                }
                            </Row>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card