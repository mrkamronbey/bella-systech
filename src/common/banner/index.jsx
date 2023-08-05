import React from 'react'
import { Col, Row } from 'react-grid-system'
import styles from './style.module.css'
import Reveal from '../../utils/reveal/reveal'
import ImageAnimation from '../image/index'
import CommonButton from "../button/index"
import { WrapperContainer } from '../../style-app'

import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Banner = ({ title, description, link, img }) => {
    const { t } = useTranslation()
    const arr = [1, 2, 3, 4]
    return (
        <>
            <div className={styles.banner_section}>
                <WrapperContainer>
                    <div className={styles.banner_big_wrapp}>
                        <div className={styles.banner_row_wrap}>
                            <Row className={styles.banner_row}>
                                <Col lg={6} md={12} sm={12} xs={12} className={styles.banner_col}>
                                    <div className={styles.banner_content_wrap}>
                                        <Reveal>
                                            <h4 className={styles.banner_title}>
                                                {title}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.banner_description}>
                                                {description}
                                            </p>
                                        </Reveal>
                                        <CommonButton className={styles.banner_btn}>
                                            <NavLink to={link}>
                                                {t("Card.0")}
                                            </NavLink>
                                        </CommonButton>
                                    </div>

                                </Col>
                                <Col lg={6} md={12} sm={12} xs={12} className={styles.banner_col}>
                                    <div className={styles.banner_img_wrapp}>
                                        <ImageAnimation src={img} style={{
                                            width: "100%",
                                            aspectRatio: 1 / 1
                                        }} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Banner