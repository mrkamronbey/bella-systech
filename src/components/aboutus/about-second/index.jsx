import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import { Col, Row } from 'react-grid-system'
import ImageAnimation from '../../../common/image/index'
import AboutSecondImg from '../../../assets/about/aboutsecond.png'
import AboutCardImg from '../../../assets/about/1.png'
import { useTranslation } from 'react-i18next'
import Reveal from '../../../utils/reveal/reveal'

const AboutSecond = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.about_second_section}>
                <WrapperContainer>
                    <div className={styles.row_wrapp}>
                        <Row className={styles.about_second_row}>
                            <Col lg={6} md={12} sm={12} className={styles.about_second_col}>
                                <ImageAnimation
                                    src={AboutCardImg}
                                    style={{
                                        width: "100%",
                                        aspectRatio: "16 / 9",
                                    }} />
                            </Col>
                            <Col lg={6} md={12} sm={12} className={styles.about_second_col}>
                                <div className={styles.about_second_content}>
                                    <Reveal>
                                        <p
                                            className={styles.about_second_text_small}>{t("AboutUs.1")}</p>
                                    </Reveal>
                                    <Reveal>
                                        <h4
                                            className={styles.about_second_title}>
                                            {t("AboutUs.2")}
                                        </h4>
                                    </Reveal>
                                    <Reveal>
                                        <p
                                            className={styles.about_second_text}>{t("AboutUs.3")}</p>
                                    </Reveal>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default AboutSecond