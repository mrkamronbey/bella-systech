import React, { useState } from "react";
import styles from "./style.module.css";
import Slider from "react-slick";
import { WrapperContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import Reveal from "../../../utils/reveal/reveal";
import CustumerImg from "../../../assets/partner/partner-logo1.png";
import SliderImg from "../../../assets/banner/banner-img.png";
import ModalCommon from "../../../common/modal/modal";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Col, Row } from "react-grid-system";

const OurCustumer = ({ dataproductfilter }) => {
  const { t } = useTranslation();
  const [ids, setIds] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
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
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return  <>
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
          title={`Modal name ${ids}`}
          width={900}
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
                Мы предоставили несколько наших услуг этой компании. Если
                возможно, лучше иметь более двух строк текста. Об этом
                идет текст в этом разделе...
              </p>
            </Reveal>
          </div>
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
                {arr.map(() => (
                  <SwiperSlide>
                    <img src={SliderImg} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={styles.modal_p_box}>
              <Reveal>
                <p className={styles.modal_p}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and
                  more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Reveal>
            </div>
            <div className={styles.modal_iframe}>
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/FmG3yqLt4bQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <p className={styles.modal_p}>
                Мы предоставили несколько наших услуг этой компании. Если
                возможно, лучше иметь более двух строк текста. Об этом
                идет текст в этом разделе...
              </p>
            </div>
            <div className={styles.modal_location}>
              <Row className={styles.modal_row}>
                <Col className={styles.modal_col} lg={7}>
                  <div className={styles.modal_local_iframe}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.8897319869409!2d69.22670907616485!3d41.32821596141305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b8f77b4c033%3A0x96c3b915851590bf!2zNzgg0JvRj9C90LPQsNGAINC60Z7Rh9Cw0YHQuCwg0KLQvnNoa2VudCwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1692689279247!5m2!1suz!2s"
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
                      <li>
                        <span>
                          <i class="bx bx-map"></i>
                        </span>
                        <a href="https://www.google.com/maps/place/78+%D0%9B%D1%8F%D0%BD%D0%B3%D0%B0%D1%80+%D0%BA%D1%9E%D1%87%D0%B0%D1%81%D0%B8,+%D0%A2%D0%BEshkent,+O%60zbekiston/@41.328216,69.2267091,19.46z/data=!4m5!3m4!1s0x38ae8b8f77b4c033:0x96c3b915851590bf!8m2!3d41.3282482!4d69.2272221?entry=ttu">
                          Toshkent, Sergeli 8-A uy
                        </a>
                      </li>
                      <li>
                        <span>
                          <i class="bx bx-phone-call"></i>
                        </span>
                        <a href="tel:+998 93 908 70 85">
                          +998 93 908 70 85
                        </a>
                      </li>
                      <li>
                        <span>
                          <i class="bx bx-phone-call"></i>
                        </span>
                        <a href="tel:+998 93 908 70 85">
                          +998 93 908 70 85
                        </a>
                      </li>
                    </ul>

                    <h4 className={styles.social_media_title}>
                      Social media
                    </h4>
                    <ul className={styles.social_list}>
                      <li>
                        <a href="https://telegram.org">
                          <span>
                            <i class="bx bxl-telegram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://instagram.com">
                          <span>
                            <i class="bx bxl-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="https://facebook.com">
                          <span>
                            <i class="bx bxl-facebook"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <p className={styles.modal_p}>
                Мы предоставили несколько наших услуг этой компании. Если
                возможно, лучше иметь более двух строк текста. Об этом
                идет текст в этом разделе...
              </p>
            </div>
          </div>
        </ModalCommon>
        <Slider {...settings}>
          {dataproductfilter.map((elem , index) =>
    elem.partners.map((e) => (
        <> 
        <div className="custumer_btn_wrapp">
          <button
            id={e.id}
            onClick={showModal}
            className="custumer_modal_btn"
          >
            <img id={e.id} src={e.logo} style={{width: "100%",
                                     height:"100%"}} alt="" />
          </button>
        </div>
      </>
    )))}
        </Slider>
      </div>
    </WrapperContainer>
  </div>
</>
};

export default OurCustumer;
