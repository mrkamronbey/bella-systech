import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app';
import { useTranslation } from 'react-i18next';
import NewsImg from '../../../assets/news/newsimg.png'
import Reveal from '../../../utils/reveal/reveal';
import CommonCard from '../../../common/card'
import { Col, Row } from 'react-grid-system'
import { NavLink } from 'react-router-dom';


const News = () => {
  const { t } = useTranslation()
  const arr = [1, 2, 3]

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
          <Row className={styles.home_news_row}>
            {
              arr.map(() => (
                <Col className={styles.home_news_col} lg={4} md={12} sm={12}>
                  <NavLink className={styles.news_link} to='#'>
                    <CommonCard
                      src={NewsImg}
                      card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      timeText={"18.05.2023"}
                      isTime={true}
                      isBtn={false}
                      isTitle={false}
                      style={{
                        aspectRatio: 16 / 9
                      }}
                    />
                  </NavLink>
                </Col>
              ))
            }
          </Row>
        </WrapperContainer>
      </div>
    </>
  )
}

export default News