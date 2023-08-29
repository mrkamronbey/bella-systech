import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import { Col, Row } from 'react-grid-system'
import { Image } from 'antd';
import './style.css'
import Slider from "react-slick";
import { SertificatGet } from '../../../redux/sertifikat/index'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const Certificate = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(SertificatGet())
    }, [])
    const sertificatGetState = useSelector((state) => state.sertificat.SertificatGet?.data)
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
                        {
                            sertificatGetState.length >= 4 ? (
                                <Slider {...settings}>
                                    {
                                        sertificatGetState.map((elem) => (
                                            <div key={elem.id} className='certificate_card_box'>
                                                <Image
                                                    style={{
                                                        width: "100%",
                                                        aspectRatio: "3 / 4",
                                                    }}
                                                    src={elem.image}
                                                />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            ) : (
                                <Row className='certificate_card_wrapps'>
                                    {
                                        sertificatGetState.slice(0, 4).map((elem) => (
                                            <Col lg={3} md={4} sm={12} xs={12} key={elem.id} >
                                                <Image
                                                    style={{
                                                        width: "100%",
                                                        aspectRatio: "3 / 4",
                                                    }}
                                                    src={elem.image}
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

export default Certificate