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
import { Button, Modal, Input, message } from 'antd';
import { NewsGet } from '../../../redux/news';
import { PostNewForm } from '../../../redux/new-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';





const RegisterSlider = () => {
    const { t } = useTranslation()
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';
    const dispatch = useDispatch()
    const newsGetState = useSelector((state) => state.news.newsGet?.data)
    const newsFormPostState = useSelector((state) => state.newsform);
    useEffect(() => {
        dispatch(NewsGet())
    }, [])

    const arr = [1, 2, 3, 4, 5]
    const [fullName, setFullName] = useState(null)
    const [number, setNumber] = useState(null)
    const [activities, setActivities] = useState(null)
    const [positions, setPositions] = useState(null)
    const [clinics, setClinics] = useState(null)
    const [newsId, setNewsId] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [disableds, setDisableds] = useState(true);

    const newsFilter = newsGetState.filter(news => news.status == "not_conducted")
    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
            style: {
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "500"
            },
        });
        newsFormPostState.postNewForm.Success == true ?
            setTimeout(() => {
                messageApi.open({
                    key,
                    type: 'success',
                    content: t("Contact.7"),
                    duration: 2,
                    style: {
                        padding: "10px 20px",
                        fontSize: "16px",
                        fontWeight: "500"
                    }
                });
            }, 2500) : setTimeout(() => {
                messageApi.open({
                    key,
                    type: 'success',
                    content: t("Contact.7"),
                    duration: 2,
                    style: {
                        padding: "10px 20px",
                        fontSize: "16px",
                        fontWeight: "500"
                    }
                });
            }, 2500)
    }
    const showModal = (e) => {
        setIsModalOpen(true);
        setNewsId(e.currentTarget.id)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(PostNewForm({
            full_name: fullName,
            phone: number,
            activity: activities,
            position: positions,
            clinic_name: clinics,
            news: newsId
        }));
        e.target[0].value = null
        e.target[1].value = null
        e.target[2].value = null
        e.target[3].value = null
        e.target[4].value = null
        openMessage()
    };
    useEffect(() => {
        !fullName || !number || !activities || !positions || !clinics ? setDisableds(true) : setDisableds(false);
    }, [clinics]);
    return (
        <>
            {
                newsFilter.length ? (
                    <div className={styles.register_section}>
                        <Modal width={800} footer={false} title={t("RegisterSlider.9")} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            <div className={styles.news_form_wrapp}>
                                <form onSubmit={HandleSubmit}>
                                    <Row className={styles.news_form_row}>
                                        <Col lg={6} md={12} sm={12} xs={12} className={styles.news_form_col}>
                                            <label htmlFor="fullname">
                                                {t("RegisterSlider.3")}
                                            </label>
                                            <Input
                                                required
                                                className={styles.news_form_input}
                                                id='fullname'
                                                onChange={(e) => setFullName(e.currentTarget.value)}
                                            />
                                        </Col>
                                        <Col lg={6} md={12} sm={12} xs={12} className={styles.news_form_col}>
                                            <label htmlFor="phone">
                                                {t("RegisterSlider.4")}
                                            </label>
                                            <Input
                                                required
                                                className={styles.news_form_input}
                                                id='phone'
                                                onChange={(e) => setNumber(e.currentTarget.value)}
                                            />
                                        </Col>
                                        <Col lg={6} md={12} sm={12} xs={12} className={styles.news_form_col}>
                                            <label htmlFor="activity">
                                                {t("RegisterSlider.5")}
                                            </label>
                                            <Input
                                                required
                                                className={styles.news_form_input}
                                                id='activity'
                                                onChange={(e) => setActivities(e.currentTarget.value)}
                                            />
                                        </Col>
                                        <Col lg={6} md={12} sm={12} xs={12} className={styles.news_form_col}>
                                            <label htmlFor="position">
                                                {t("RegisterSlider.6")}
                                            </label>
                                            <Input
                                                required
                                                className={styles.news_form_input}
                                                id='position'
                                                onChange={(e) => setPositions(e.currentTarget.value)}
                                            />
                                        </Col>
                                        <Col lg={6} md={12} sm={12} xs={12} className={styles.news_form_col}>
                                            <label htmlFor="clinic_name">
                                                {t("RegisterSlider.7")}
                                            </label>
                                            <Input
                                                required
                                                className={styles.news_form_input}
                                                id='clinic_name'
                                                onChange={(e) => setClinics(e.currentTarget.value)}
                                            />
                                        </Col>
                                        <Col lg={12} className={`${styles.news_form_col} ${styles.news_form_col_btn}`}>
                                            {contextHolder}
                                            <CommonButton
                                                disabled={disableds}
                                                type='submit'
                                                className={styles.news_form_btn}>
                                                {t("RegisterSlider.8")}
                                            </CommonButton>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Modal>
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
                                        newsFilter?.map((elem) => (
                                            <SwiperSlide>
                                                <div className={styles.register_wrapp}>
                                                    <Row className={styles.register_row}>
                                                        <Col lg={7} md={12} sm={12} className={styles.register_col}>
                                                            <div className={styles.register_img_wrapp}>
                                                                <ImageAnimation src={elem.image} style={{
                                                                    width: "100%",
                                                                    aspectRatio: "16 / 9",
                                                                }} />
                                                            </div>
                                                        </Col>
                                                        <Col lg={5} md={12} sm={12} className={styles.register_col}>
                                                            <div className={styles.register_content_wrapp}>
                                                                <Reveal>
                                                                    <h4 className={styles.register_title}>
                                                                        {
                                                                            LanguValue() == 'uz' ? elem.title_uz : LanguValue() == 'en' ? elem.title_en : LanguValue() == 'ru' ? elem.title_ru : null
                                                                        }
                                                                    </h4>
                                                                </Reveal>
                                                                <Reveal>
                                                                    <p className={styles.register_text}>
                                                                        {
                                                                            LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 200)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 200)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 200)}...` : null
                                                                        }
                                                                    </p>
                                                                </Reveal>
                                                                <CommonButton
                                                                    id={elem.id}
                                                                    onClick={showModal}
                                                                    className={styles.register_btn}>
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
                ) : null
            }

        </>
    );
}

export default RegisterSlider