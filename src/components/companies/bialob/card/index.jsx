import React from 'react'
import styles from "./style.module.css"
import { useTranslation } from 'react-i18next'
import CommonCard from '../../../../common/card'
import CardImg from "./../../../../assets/card/cardimg.png"
import "./style.css"
import Slider from "react-slick";
const Card = () => {
    const {t} = useTranslation()
    const data = [1 , 2 ,3 , 4 ,5]
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
        <h2>{t("Compaines.2")}</h2>
        <div className='ourproduct_slider_wrapp'>
                        <Slider {...settings}>
                            {
                                data.map(() => (
                                    <div className='slider_card_box'>
                                        <CommonCard
                                            src={"https://biotus.uz/media/amasty/amoptmobile/catalog/product/cache/1a5f7a0f055b7b526c4e22471a441dbb/1/_/1_818_56_jpg.webp"}
                                            card_title="Краткая информация"
                                            card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                            card_btn_text1={t("Card.0")}
                                            card_btn_text2={t("Card.1")}
                                            details="/product"
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