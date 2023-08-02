import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import { Col, Row } from 'react-grid-system'
import { Image } from 'antd';
import CertificateImg from '../../../assets/about/certificate.png';
import './style.css'
import Slider from "react-slick";

const Certificate = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8,]
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1235,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
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
                    autoplay: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true
                }
            }
        ]
    };
    return (
        <>
            <div className={styles.certificate_section}>
                <WrapperContainer>
                    <div className='certificate_wrap'>
                        <Slider {...settings}>
                            {
                                arr.map(() => (
                                    <div className='certificate_card_box'>
                                        <Image
                                            style={{
                                                width: "100%",
                                                aspectRatio: "18 / 24",
                                            }}
                                            src={CertificateImg}
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

export default Certificate