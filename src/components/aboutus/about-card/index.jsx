import React from "react";
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-app'
import Reveal from '../../../utils/reveal/reveal'
import { Col, Row } from "react-grid-system";

import Card1 from '../../../assets/about/crd1.png'
import Card2 from '../../../assets/about/crd2.png'
import Card3 from '../../../assets/about/crd3.png'
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const AboutCard = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.about_card_section}>
                <WrapperContainer>
                    <div className={styles.row_wrapp}>
                        <Row className={styles.about_card_row}>
                            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                                <div className={styles.col_card_wrapp}>
                                    <div className={styles.col_img_wrapp}>
                                        <img src={Card1} alt="" />
                                    </div>
                                    <div className={styles.col_card_content}>
                                        <Reveal>
                                            <h4
                                                className={styles.col_card_title}>
                                                {t("AboutUs.4")}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.col_card_text}>
                                                {t("AboutUs.5")}
                                            </p>
                                        </Reveal>
                                        <div className={styles.col_card_link}>
                                            <Reveal>
                                                <NavLink className={styles.col_card_navLink} to="/benefits">
                                                    {t("AboutUs.16")}
                                                </NavLink>
                                            </Reveal>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                                <div className={styles.col_card_wrapp}>
                                    <div className={styles.col_img_wrapp}>
                                        <img src={Card2} alt="" />
                                    </div>
                                    <div className={styles.col_card_content}>
                                        <Reveal>
                                            <h4
                                                className={styles.col_card_title}>
                                                {t("AboutUs.6")}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.col_card_text}>
                                                {t("AboutUs.7")}
                                            </p>
                                        </Reveal>
                                        <div className={styles.col_card_link}>
                                            <Reveal>
                                                <NavLink className={styles.col_card_navLink} to="/benefits">
                                                    {t("AboutUs.16")}
                                                </NavLink>
                                            </Reveal>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                                <div className={styles.col_card_wrapp}>
                                    <div className={styles.col_img_wrapp}>
                                        <img src={Card3} alt="" />
                                    </div>
                                    <div className={styles.col_card_content}>
                                        <Reveal>
                                            <h4
                                                className={styles.col_card_title}>
                                                {t("AboutUs.8")}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.col_card_text}>
                                                {t("AboutUs.9")}
                                            </p>
                                        </Reveal>
                                        <div className={styles.col_card_link}>
                                            <Reveal>
                                                <NavLink className={styles.col_card_navLink} to="/benefits">
                                                    {t("AboutUs.16")}
                                                </NavLink>
                                            </Reveal>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                                <div className={styles.col_card_wrapp}>
                                    <div className={styles.col_img_wrapp}>
                                        <img src={Card1} alt="" />
                                    </div>
                                    <div className={styles.col_card_content}>
                                        <Reveal>
                                            <h4
                                                className={styles.col_card_title}>
                                                {t("AboutUs.10")}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.col_card_text}>
                                                {t("AboutUs.11")}
                                            </p>
                                        </Reveal>
                                        <div className={styles.col_card_link}>
                                            <Reveal>
                                                <NavLink className={styles.col_card_navLink} to="/benefits">
                                                    {t("AboutUs.16")}
                                                </NavLink>
                                            </Reveal>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                                <div className={styles.col_card_wrapp}>
                                    <div className={styles.col_img_wrapp}>
                                        <img src={Card2} alt="" />
                                    </div>
                                    <div className={styles.col_card_content}>
                                        <Reveal>
                                            <h4
                                                className={styles.col_card_title}>
                                                {t("AboutUs.12")}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.col_card_text}>
                                                {t("AboutUs.13")}
                                            </p>
                                        </Reveal>
                                        <div className={styles.col_card_link}>
                                            <Reveal>
                                                <NavLink className={styles.col_card_navLink} to="/benefits">
                                                    {t("AboutUs.16")}
                                                </NavLink>
                                            </Reveal>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className={styles.about_card_col} lg={6} md={12} sm={12}>
                                <div className={styles.col_card_wrapp}>
                                    <div className={styles.col_img_wrapp}>
                                        <img src={Card3} alt="" />
                                    </div>
                                    <div className={styles.col_card_content}>
                                        <Reveal>
                                            <h4
                                                className={styles.col_card_title}>
                                                {t("AboutUs.14")}
                                            </h4>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.col_card_text}>
                                                {t("AboutUs.15")}
                                            </p>
                                        </Reveal>
                                        <div className={styles.col_card_link}>
                                            <Reveal>
                                                <NavLink className={styles.col_card_navLink} to="/benefits">
                                                    {t("AboutUs.16")}
                                                </NavLink>
                                            </Reveal>
                                        </div>
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

export default AboutCard