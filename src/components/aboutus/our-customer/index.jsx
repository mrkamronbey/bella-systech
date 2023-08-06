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




const OurCustumer = () => {
    const { t } = useTranslation()
    const [ids, setIds] = useState()
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
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
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
                            title={`Modal name ${ids}`}
                            width={700}
                            isModalOpen={isModalOpen}
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                        >
                            <div className={styles.modal_head_wrapp}>
                                {/* <Reveal>
                                    <h4></h4>
                                </Reveal> */}
                                <Reveal>
                                    <p className={styles.modal_p}>
                                        Мы предоставили несколько наших услуг этой компании. Если возможно, лучше
                                        иметь более двух строк текста. Об этом идет текст в этом разделе...
                                    </p>
                                </Reveal>
                            </div>
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
                                        {
                                            arr.map(() => (
                                                <SwiperSlide>
                                                    <img src={SliderImg} alt="" />
                                                </SwiperSlide>
                                            ))
                                        }

                                    </Swiper>
                                </div>
                                <div className={styles.modal_p_box}>
                                    <Reveal>
                                        <p className={styles.modal_p}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </Reveal>
                                </div>
                                <div className={styles.modal_iframe}>
                                    <iframe width="100%" height="350" src="https://www.youtube.com/embed/FmG3yqLt4bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </ModalCommon>
                        <Slider {...settings}>
                            {
                                arr.map((_, index) => (
                                    <>
                                        <div className="custumer_btn_wrapp">
                                            <button id={index} onClick={showModal} className="custumer_modal_btn">
                                                <img src={CustumerImg} alt="" />
                                            </button>
                                        </div>
                                    </>
                                ))
                            }

                        </Slider>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default OurCustumer