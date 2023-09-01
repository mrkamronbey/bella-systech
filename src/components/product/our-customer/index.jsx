import React, { useState } from "react";
import styles from "./style.module.css";
import Slider from "react-slick";
import { WrapperContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import Reveal from "../../../utils/reveal/reveal";
import SliderImg from "../../../assets/banner/banner-img.png";
import ModalCommon from "../../../common/modal/modal";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { PartnersGet } from "../../../redux/partners";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Col, Row } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const OurCustumer = ({ dataproductfilter }) => {
  const { t } = useTranslation();
  const [ids, setIds] = useState();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(PartnersGet())
  }, [])


  const showModal = (e) => {
    setIsModalOpen(true);
    setIds(e.currentTarget.id);
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
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const filterPartners = dataproductfilter?.map(elem => elem.partners?.filter(elem => elem.id == ids))
  console.log(filterPartners, 'partnersss')
  const [isModalOpen, setIsModalOpen] = useState(false);
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <>
    <div className={styles.custumer_section}>
      <WrapperContainer>
        <div className={styles.custumer_content}>
          <Reveal>
            <h4 className={styles.custumer_title}>{t("BeforeAfter.2")}</h4>
          </Reveal>
          <Reveal>
            <p className={styles.custumer_text}>{t("BeforeAfter.3")}</p>
          </Reveal>
        </div>
        <div className="custumer_slid_wrapp">
          <ModalCommon
            className="product_modal"
            title={
              filterPartners?.map(e => e.map(elem => (LanguValue() == 'uz' ? elem.name_uz : LanguValue() == 'en' ? elem.name_en : LanguValue() == 'ru' ? elem.name_ru : null)))

            }
            width={900}
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          >
            {
              filterPartners.map(e => e.map(elem => (
                <div className={styles.modal_contentss_wrapp}>
                  <div className="modal_slid_wrapp">
                    <Swiper
                      pagination={{
                        type: "progressbar",
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
                    <iframe
                      width="100%"
                      height="350"
                      src={elem.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className={styles.modal_location}>
                    <Row className={styles.modal_row}>
                      <Col className={styles.modal_col} lg={7}>
                        <div className={styles.modal_local_iframe}>
                          <iframe
                            src={elem.location}
                            width="100%"
                            height="300"
                            style={{ border: "0" }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </Col>
                      <Col className={styles.modal_col} lg={5}>
                        <div className={styles.modal_contact}>
                          <h4>Contact detail</h4>
                          <ul>
                            {/* <li>
                                <span>
                                  <i class="bx bx-map"></i>
                                </span>
                                <a href="https://www.google.com/maps/place/78+%D0%9B%D1%8F%D0%BD%D0%B3%D0%B0%D1%80+%D0%BA%D1%9E%D1%87%D0%B0%D1%81%D0%B8,+%D0%A2%D0%BEshkent,+O%60zbekiston/@41.328216,69.2267091,19.46z/data=!4m5!3m4!1s0x38ae8b8f77b4c033:0x96c3b915851590bf!8m2!3d41.3282482!4d69.2272221?entry=ttu">
                                  Toshkent, Sergeli 8-A uy
                                </a>
                              </li> */}
                            <li>
                              <span>
                                <i class="bx bx-phone-call"></i>
                              </span>
                              <a href={`tel:${elem.phone_number1}`}>
                                {elem.phone_number1}
                              </a>
                            </li>
                            <li>
                              <span>
                                <i class="bx bx-phone-call"></i>
                              </span>
                              <a href={`tel:${elem.phone_number2}`}>
                                {elem.phone_number2}
                              </a>
                            </li>
                          </ul>

                          <h4 className={styles.social_media_title}>
                            Social media
                          </h4>
                          <ul className={styles.social_list}>
                            <li>
                              <a href={elem.telegram_link}>
                                <span>
                                  <i class="bx bxl-telegram"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href={elem.instagram_link}>
                                <span>
                                  <i class="bx bxl-instagram"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href={elem.facebook_link}>
                                <span>
                                  <i class="bx bxl-facebook"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )))
            }
          </ModalCommon>
          {
            dataproductfilter.map(elem => elem.partners.length >= 4 ? (
              <Slider {...settings}>
                {dataproductfilter.map((elem) =>
                  elem.partners.map((e) => (
                    <>
                      <div className="custumer_btn_wrapp">
                        <button
                          id={e.id}
                          onClick={showModal}
                          className="custumer_modal_btn"
                        >
                          <img id={e.id} src={e.logo} style={{
                            width: "100%",
                            height: "100%",
                            aspectRatio: "16 / 9"
                          }} alt="" />
                        </button>
                      </div>
                    </>
                  )))}
              </Slider>
            ) : (
              <Row style={{ margin: "0" }}>
                {
                  dataproductfilter.map((elem) =>
                    elem.partners.map(e => (
                      <Col lg={3}>
                        <button
                          id={e.id}
                          onClick={showModal}
                          className="custumer_modal_btn"
                        >
                          <img id={e.id} src={e.logo} style={{
                            width: "100%",
                            height: "100%",
                            aspectRatio: "16 / 9"
                          }} alt="" />
                        </button>
                      </Col>
                    )))
                }
              </Row>
            ))
          }
        </div>
      </WrapperContainer>
    </div>
  </>
};

export default OurCustumer;
