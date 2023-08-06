import React from "react";
import styles from './style.module.css'
import { WrapperContainer } from '../../../../style-app'
import Reveal from '../../../../utils/reveal/reveal'
import { Col, Row } from "react-grid-system";

import Card1 from '../../../../assets/about/crd1.png'
import Card2 from '../../../../assets/about/crd2.png'
import Card3 from '../../../../assets/about/crd3.png'
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const ClassysCard = () => {
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
                                                {t("Compaines.22")}
                                            </h4>
                                        </Reveal>
                                        <ul className={styles.classys_ul}>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.23")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.24")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                        </ul>
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
                                                {t("Compaines.25")}
                                            </h4>
                                        </Reveal>
                                        <ul className={styles.classys_ul}>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.26")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.27")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                        </ul>
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
                                                {t("Compaines.28")}
                                            </h4>
                                        </Reveal>
                                        <ul className={styles.classys_ul}>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.29")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                        </ul>
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
                                                {t("Compaines.30")}
                                            </h4>
                                        </Reveal>
                                        <ul className={styles.classys_ul}>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.31")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                            <li>
                                                <Reveal>
                                                    <p className={styles.classys_item_p}>
                                                        {t("Compaines.32")}
                                                    </p>
                                                </Reveal>
                                            </li>
                                        </ul>
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

export default ClassysCard