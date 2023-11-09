import React, { useState } from 'react'
import './style.css'
import styles from './style.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Autoplay, Pagination } from 'swiper/modules';
import CommonButton from '../../../common/button';
import Reveal from '../../../utils/reveal/reveal';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-creative';
import BannerImg from '../../../assets/banner/image_2023-09-15_09-56-59.png'
import BannerImg2 from '../../../assets/banner/3.png'
import BannerImg3 from '../../../assets/banner/4.png'

const HomeHeroSlider = () => {
    const { t } = useTranslation()
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <>
            <div
                className='home_hero_section'>
                <Swiper
                    effect={'creative'}
                    navigation={true}
                    loop={true}
                    speed={1500}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -800],
                            rotate: [180, 0, 0],
                        },
                        next: {
                            shadow: true,
                            translate: [0, 0, -800],
                            rotate: [-180, 0, 0],
                        },
                    }}
                    modules={[Navigation, Autoplay, EffectCreative]}
                    className="mySwiper6"
                >
                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src={LanguValue() == "ru" ?  BannerImg : LanguValue() == "uz" ? BannerImg3 : LanguValue() == "en" ? BannerImg2 : null }
                        />
                        <div className={styles.content_box}>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>
                                    <a href="tel:+998 90 735 55 44">
                                        {t("HeroSlider.0")}
                                    </a>
                                </CommonButton>
                                <CommonButton className={styles.right_btn}>
                                    <a href="#form">
                                        {t("HeroSlider.1")}
                                    </a>
                                </CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/02.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 2</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/03.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 3</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/04.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 4</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/05.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 5</h2>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.slider_text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, blanditiis.</p>
                                </Reveal>
                            </div>
                            <div className={styles.btn_group}>
                                <CommonButton className={styles.left_btn}>{t("HeroSlider.0")}</CommonButton>
                                <CommonButton className={styles.right_btn}>{t("HeroSlider.1")}</CommonButton>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                {/* </WrapperContainer> */}
            </div>
        </>
    )
}

export default HomeHeroSlider