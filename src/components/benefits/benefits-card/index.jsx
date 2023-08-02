import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import { Col, Row } from 'react-grid-system'
import BenefitsImg from '../../../assets/benefits/benefits.png'
import { useTranslation } from 'react-i18next'
import Reveal from '../../../utils/reveal/reveal'
import ImageAnimation from '../../../common/image/index'
import './style.css'

const BenefitsCard = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.benefits_card_section}>
                <WrapperContainer>
                    <div className={styles.benefits_card_wrapp}>
                        <Row className={styles.benefits_row}>
                            <Col lg={12} md={12} sm={12} className={styles.benefits_col}>
                                <div className='benefits_col_wrapp'>
                                    <div className={styles.benefits_col_img}>
                                        <ImageAnimation
                                            src={BenefitsImg}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "16 / 9",
                                                borderRadius: "5px",
                                            }} />
                                    </div>
                                    <div className={styles.benefits_col_content}>
                                        <Reveal>
                                            <h4 className={styles.benefits_col_title}>{t("Benefits.6")}</h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.benefits_col_text}>{t("Benefits.7")}</p>
                                        </Reveal>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} className={styles.benefits_col}>
                                <div className='benefits_col_wrapp benefits_media_col_wrapp'>
                                    <div className={styles.benefits_col_content}>
                                        <Reveal>
                                            <h4 className={styles.benefits_col_title}>{t("Benefits.8")}</h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.benefits_col_text}>{t("Benefits.9")}</p>
                                        </Reveal>
                                    </div>
                                    <div className={styles.benefits_col_img}>
                                        <ImageAnimation
                                            src={BenefitsImg}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "16 / 9",
                                                borderRadius: "5px",
                                            }} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} className={styles.benefits_col}>
                                <div className='benefits_col_wrapp'>
                                    <div className={styles.benefits_col_img}>
                                        <ImageAnimation
                                            src={BenefitsImg}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "16 / 9",
                                                borderRadius: "5px",
                                            }} />
                                    </div>
                                    <div className={styles.benefits_col_content}>
                                        <Reveal>
                                            <h4 className={styles.benefits_col_title}>{t("Benefits.10")}</h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.benefits_col_text}>{t("Benefits.11")}</p>
                                        </Reveal>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} md={12} sm={12} className={styles.benefits_col}>
                                <div className='benefits_col_wrapp benefits_media_col_wrapp'>
                                    <div className={styles.benefits_col_content}>
                                        <Reveal>
                                            <h4 className={styles.benefits_col_title}>{t("Benefits.12")}</h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.benefits_col_text}>{t("Benefits.13")}</p>
                                        </Reveal>
                                    </div>
                                    <div className={styles.benefits_col_img}>
                                        <ImageAnimation
                                            src={BenefitsImg}
                                            style={{
                                                width: "100%",
                                                aspectRatio: "16 / 9",
                                                borderRadius: "5px",
                                            }} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default BenefitsCard