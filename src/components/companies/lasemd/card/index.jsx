import React from 'react'
import styles from "./style.module.css"
import { useTranslation } from 'react-i18next'
import CommonCard from '../../../../common/card'
import "./style.css"
import Slider from "react-slick";
const Card = () => {
    const { t } = useTranslation()
    const data = [1, 2, 3, 4, 5]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
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
                    dots: false
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
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <div className={styles.box}>
                    <h2>{t("Compaines.5")}</h2>
                    <div className='ourproduct_slider_wrapp'>
                        <Slider {...settings}>
                            {
                                data.map(() => (
                                    <div className='slider_card_box'>
                                        <CommonCard
                                            src={"https://llskin.ru/image/cache/catalog/VIA/VIAnew-642x470.png"}
                                            style={{ width: "100%", aspectRatio: 16 / 10 }}
                                            card_title="Краткая информация"
                                            card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                            card_btn_text1={t("Card.0")}
                                            card_btn_text2={t("Card.1")}
                                            details="/product2"
                                            order="#"
                                            isBtn={true}
                                            isTitle={true}
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card