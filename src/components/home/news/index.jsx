import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app';
import { useTranslation } from 'react-i18next';
import NewsImg from '../../../assets/news/newsimg.png'
import Reveal from '../../../utils/reveal/reveal';
import CommonCard from '../../../common/card'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";


const News = () => {
  const { t } = useTranslation()
  const arr = [1, 2, 3, 4, 5, 7, 8, 9]
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
          <Slider {...settings}>
            {
              arr.map(() => (
                <div className='slider_card_box'>
                  <NavLink className={styles.news_link} to='#'>
                    <CommonCard
                      src={NewsImg}
                      card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      timeText={"18.05.2023"}
                      isTime={true}
                      isBtn={false}
                      isTitle={false}
                      style={{
                        aspectRatio: 16 / 9,
                      }}
                      textStyle={{ fontWeight: '600', color: "#000" }}
                    />
                  </NavLink>
                </div>
              ))
            }
          </Slider>
        </WrapperContainer>
      </div>
    </>
  )
}

export default News