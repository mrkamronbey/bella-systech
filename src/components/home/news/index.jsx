import React, { useEffect } from "react";
import styles from "./style.module.css";
import { WrapperContainer } from "../../../style-app";
import { useTranslation } from "react-i18next";
import NewsImg from "../../../assets/news/newsimg.png";
import Reveal from "../../../utils/reveal/reveal";
import CommonCard from "../../../common/card";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import './style.css'
import { NewsGet } from "../../../redux/news";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-grid-system";

const News = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const newsGetState = useSelector((state) => state.news.newsGet?.data)
  console.log(newsGetState)
  useEffect(() => {
    dispatch(NewsGet())
  }, [])
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
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

  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join(".");
  };

  return (
    <>
      <div className={styles.news_section}>
        <WrapperContainer>
          <div className={styles.news_content}>
            <Reveal>
              <h4 className={styles.news_title}>{t("News.0")}</h4>
            </Reveal>
            <Reveal>
              <p className={styles.news_text}>{t("News.1")}</p>
            </Reveal>
          </div>
          <div className='news_slider_wrapp'>
            {
              newsGetState.length >= 3 ? (
                <Slider {...settings}>
                  {newsGetState.map((elem) => (
                    <div className="slider_card_box">
                      <NavLink className={styles.news_link} to={`/newsmore/${elem.id}`}>
                        <CommonCard
                          src={elem.image}
                          card_description={LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 50)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 50)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 50)}...` : null}
                          timeText={DateFormat(elem.time_date)}
                          isTime={true}
                          isBtn={false}
                          isTitle={false}
                          style={{
                            aspectRatio: 16 / 9,
                            width: '100%'
                          }}
                          textStyle={{ fontWeight: "600", color: "#000" }}
                        />
                      </NavLink>
                    </div>
                  ))}
                </Slider>
              ) : (
                <Row style={{ margin: "0" }}>
                  {
                    newsGetState.slice(0, 3).map(elem => (
                      <Col lg={4} md={6} sm={12} xs={12}>
                        <NavLink className={styles.news_link} to={`/newsmore/${elem.id}`}>
                          <CommonCard
                            src={elem.image}
                            card_description={LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 50)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 50)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 50)}...` : null}
                            timeText={DateFormat(elem.time_date)}
                            isTime={true}
                            isBtn={false}
                            isTitle={false}
                            style={{
                              aspectRatio: 16 / 9,
                              width: '100%'
                            }}
                            textStyle={{ fontWeight: "600", color: "#000" }}
                          />
                        </NavLink>
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
  );
};

export default News;
