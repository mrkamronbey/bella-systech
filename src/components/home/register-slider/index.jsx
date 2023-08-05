import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import styles from './style.module.css'
import Reveal from '../../../utils/reveal/reveal'
import ImageAnimation from '../../../common/image';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { WrapperContainer } from '../../../style-app';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'react-grid-system';
import CommonButton from '../../../common/button';

import RegisterSliderImg from '../../../assets/register/register-img.png'
import RegisterImgBorder from '../../../assets/register/registerimgborder.png'





const RegisterSlider = () => {
    const { t } = useTranslation()
    const arr = [1, 2, 3, 4, 5]
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className={styles.register_section}>
                <WrapperContainer>
                    <div className='register_slider_wrapp'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                            autoplay={{
                                delay: 9500,
                                disableOnInteraction: false,
                            }}
                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                        >
                            {
                                arr.map(() => (
                                    <SwiperSlide>
                                        <div className={styles.register_wrapp}>
                                            <Row className={styles.register_row}>
                                                <Col lg={7} md={12} sm={12} className={styles.register_col}>
                                                    <div className={styles.register_img_wrapp}>
                                                        <ImageAnimation src={RegisterSliderImg} style={{
                                                            width: "100%",
                                                            aspectRatio: "16 / 9",
                                                        }} />
                                                    </div>
                                                </Col>
                                                <Col lg={5} md={12} sm={12} className={styles.register_col}>
                                                    <div className={styles.register_content_wrapp}>
                                                        <Reveal>
                                                            <h4 className={styles.register_title}>{t("RegisterSlider.0")}</h4>
                                                        </Reveal>
                                                        <Reveal>
                                                            <p className={styles.register_text}>{t("RegisterSlider.1")}</p>
                                                        </Reveal>
                                                        <CommonButton className={styles.register_btn}>
                                                            {t("RegisterSlider.2")}
                                                        </CommonButton>
                                                    </div>
                                                </Col>
                                            </Row>


                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div>

                        </Swiper>
                    </div>
                </WrapperContainer>
            </div>
        </>
    );
}

export default RegisterSlider