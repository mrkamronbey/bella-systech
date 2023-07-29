import React from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-app'
import styles from './style.module.css'
import Reveal from '../../../utils/reveal/reveal'
import { useTranslation } from 'react-i18next'
import ImageAnimation from '../../../common/image'

import HomeThirdImg from '../../../assets/home/home-third-img.png'

const HomeThird = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.home_third_section}>
                <WrapperContainer>
                    <Row className={styles.home_third_row}>
                        <Col
                            className={styles.home_third_col}
                            lg={5}
                            md={12}
                            sm={12}
                        >
                            <Reveal>
                                <h4 className={styles.home_third_title}>
                                    {t("HomeThird.0")}
                                </h4>
                            </Reveal>
                            <Reveal>
                                <p className={styles.home_third_text}>
                                    {t("HomeThird.1")}
                                </p>
                            </Reveal>
                        </Col>
                        <Col
                            className={styles.home_third_col}
                            lg={7}
                            md={12}
                            sm={12}
                        >
                            <ImageAnimation
                                style={{
                                    aspectRatio: "16 / 9",
                                    borderRadius: "15px"
                                }}
                                src={HomeThirdImg} />
                        </Col>
                    </Row>
                    {/* <div className={styles.home_thirdrow}>
                        <div className={styles.home_thirdcol}>
                            <Reveal>
                                <h4 className={styles.home_third_title}>
                                    {t("HomeThird.0")}
                                </h4>
                            </Reveal>
                            <Reveal>
                                <p className={styles.home_third_text}>
                                    {t("HomeThird.1")}
                                </p>
                            </Reveal>
                        </div>
                        <div className={styles.home_thirdcol}>
                            <ImageAnimation
                                style={{
                                    aspectRatio: "16 / 9",
                                    borderRadius: "15px"
                                }}
                                src={HomeThirdImg} />
                        </div>
                    </div> */}
                </WrapperContainer>
            </div>
        </>
    )
}

export default HomeThird