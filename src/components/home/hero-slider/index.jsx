import React from 'react'
import './style.css'
import styles from './style.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from 'swiper/modules';
import CommonButton from '../../../common/button';
import Reveal from '../../../utils/reveal/reveal';
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import BannerImg from '../../../assets/banner'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import { useTranslation } from 'react-i18next';

const HomeHeroSlider = () => {
    const { t } = useTranslation()
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    // const scaleSpring = useSpring(scale)
    return (
        <>
            <motion.div
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    scale
                }}
                className={styles.home_hero_section}>
                {/* <WrapperContainer> */}
                <Swiper
                    // grabCursor={true}
                    effect={'creative'}
                    navigation={true}
                    shadow={true}
                    loop={true}
                    speed={850}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            origin: 'left center',
                            translate: ['-5%', 0, -200],
                            rotate: [0, 100, 0],
                        },
                        next: {
                            origin: 'right center',
                            translate: ['5%', 0, -200],
                            rotate: [0, -100, 0],
                        },
                    }}
                    modules={[Navigation, EffectCreative]}
                    className="mySwiper6"
                >
                    <SwiperSlide>
                        <img
                            className="swiper-slide-image"
                            src="https://studio.swiperjs.com/demo-images/nature/01.jpg"
                        />
                        <div className={styles.content_box}>
                            <div className={styles.slider_content}>
                                <Reveal>
                                    <h2 className={styles.slider_title}>Banner slide 1</h2>
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
                    </SwiperSlide>
                </Swiper>
                {/* </WrapperContainer> */}
            </motion.div>
        </>
    )
}

export default HomeHeroSlider