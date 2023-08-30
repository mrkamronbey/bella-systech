import React, { useState } from 'react';
import styles from './style.module.css'
import Slider from "react-slick";
import { WrapperContainer } from "../../../style-app";
import { useTranslation } from 'react-i18next';
import Reveal from '../../../utils/reveal/reveal'
import CustumerImg from '../../../assets/partner/partner-logo1.png'
import SliderImg from '../../../assets/banner/banner-img.png'
import ModalCommon from '../../../common/modal/modal';
import './styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { PartnersGet } from '../../../redux/partners';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Col, Row } from 'react-grid-system';

const OurCustumer = () => {
    const { t } = useTranslation()
    const [ids, setIds] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(PartnersGet())
    }, [])
    const partnerGetState = useSelector((state) => state.partners.PartnersGet?.data)
    const filterPartners = partnerGetState.filter(item => item.id == ids)
    console.log(filterPartners, 'partners about')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (e) => {
        setIsModalOpen(true);
        setIds(e.currentTarget.id)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const settings = {
        dots: true,
        centerMode: false,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 4,
        speed: 1000,
        rows: 2,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <>
            <div className={styles.custumer_section}>
                <WrapperContainer>
                    <div className={styles.custumer_content}>
                        <Reveal>
                            <h4 className={styles.custumer_title}>{t("AboutUs.18")}</h4>
                        </Reveal>
                        <Reveal>
                            <p className={styles.custumer_text}>{t("AboutUs.19")}</p>
                        </Reveal>
                    </div>
                    <div className="custumer_slid_wrapp">
                        <ModalCommon
                            title={filterPartners.map(elem =>
                                LanguValue() == 'uz' ? elem.name_uz : LanguValue() == 'en' ? elem.name_en : LanguValue() == 'ru' ? elem.name_ru : null
                            )}
                            width={700}
                            isModalOpen={isModalOpen}
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                        >
                            {
                                filterPartners.map(elem => (
                                    <>
                                        <div className={styles.modal_contentss_wrapp}>
                                            <div className='modal_slid_wrapp'>
                                                <Swiper
                                                    pagination={{
                                                        type: 'progressbar',
                                                    }}
                                                    navigation={true}
                                                    modules={[Pagination, Navigation]}
                                                    className="mySwiper"
                                                >

                                                    <SwiperSlide>
                                                        <img src={elem.image1} alt="" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <img src={elem.image2} alt="" />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <img src={elem.image3} alt="" />
                                                    </SwiperSlide>
                                                </Swiper>
                                            </div>
                                            <div className={styles.modal_p_box}>
                                                <Reveal>
                                                    <p className={styles.modal_p}>
                                                        {
                                                            LanguValue() == 'uz' ? elem.description_uz : LanguValue() == 'en' ? elem.description_en : LanguValue() == 'ru' ? elem.description_ru : null
                                                        }
                                                    </p>
                                                </Reveal>
                                            </div>
                                            <div className={styles.modal_iframe}>
                                                <iframe width="100%" height="350" src={elem.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </ModalCommon>
                        {
                            partnerGetState.length >= 8 ? (
                                <Slider {...settings}>
                                    {
                                        partnerGetState.map((elem) => (
                                            <>
                                                <div className="custumer_btn_wrapp">
                                                    <button id={elem.id} onClick={showModal} className="custumer_modal_btn">
                                                        <img src={elem.logo} alt="" />
                                                    </button>
                                                </div>
                                            </>
                                        ))
                                    }

                                </Slider>
                            ) : (
                                <Row style={{ margin: "0" }}>
                                    {
                                        partnerGetState.slice(0, 8).map(elem => (
                                            <Col lg={3} className='custumer_modal_col'>
                                                <button id={elem.id} onClick={showModal} className="custumer_modal_btn">
                                                    <img style={{ aspectRatio: "16 / 9", width: "100%", height: "100px" }} src={elem.logo} alt="" />
                                                </button>
                                            </Col>
                                        ))
                                    }
                                    <Col lg={3}></Col>
                                </Row>
                            )
                        }
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default OurCustumer