import React from 'react'
import styles from "./style.module.css"
import { Col, Row } from "react-grid-system"
import Logo from "./../../assets/logo.svg"
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Reveal from '../../utils/reveal/reveal'
import { WrapperContainer } from '../../style-app'
const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.Wrapper}>
            <div className={styles.Container}>
                <Row className={styles.row}>
                    <Col lg={4} md={12} className={styles.Col_right}>
                        <div className={styles.box}>
                            <img src={Logo} alt="" />
                            <Reveal>
                                <p>{t("Footer.10")}</p></Reveal>
                            <hr />
                            <div className={styles.network}>
                                <a href="tel:+998 90 735 55 44">
                                    <i class='bx bxs-phone-call'>
                                    </i>
                                    +998 90 735 55 44</a>
                                <a href="mailto:info@bella-systech.uz"><i class='bx bxs-envelope' ></i>info@bella-systech.uz</a>
                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6307878615066!2d69.27150627511922!3d41.29513930171357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba4e6f1d2e3%3A0x28e4d7c3fa7e25f8!2z6ZqU56a75oi_!5e0!3m2!1suz!2s!4v1696061972835!5m2!1suz!2s"  target={"_blank"}><i class='bx bxs-map' ></i>Узбекистан, Ташкент, Мирабадский р-н, ул. Фидокор 7</a>
                            </div>
                        </div>
                    </Col>
                    <Col className={styles.Col_left} lg={8} md={12}>
                        <Row>
                            <Col className={styles.navigation} lg={4} md={12} xs={12} >
                                <ul>
                                    <li><p>{t("Footer.0")}</p></li>
                                    <li>
                                        <NavLink className={styles.Navlink} to="/companies/lutronic">Lutronic</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={styles.Navlink} to="/companies/classys">Classys</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={styles.Navlink} to="/companies/histolab">Histolab</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={styles.Navlink} to="/companies/juvelook">Juvelook & Lenisna</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={styles.Navlink} to="/companies/skinwell">Skinwell</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={styles.Navlink} to="/companies/biolab">BNV Biolab</NavLink>
                                    </li>
                                </ul>

                            </Col>
                            <Col className={styles.navigation} lg={4} md={12}>
                                <ul>
                                    <li><p>{t("Footer.1")}</p></li>
                                    <li><NavLink className={styles.Navlink} to={"/category"}>{t("Footer.2")}</NavLink></li>
                                    <li><NavLink className={styles.Navlink} to={"/about"}>{t("Footer.3")}</NavLink></li>
                                    <li><NavLink className={styles.Navlink} to={"/benefits"}>{t("Footer.4")}</NavLink></li>
                                    <li><NavLink className={styles.Navlink} to={"/join"}>{t("Footer.5")}</NavLink></li>
                                    <li><NavLink className={styles.Navlink} to={"/news"}>{t("Footer.6")}</NavLink></li>
                                    <li><NavLink className={styles.Navlink} to={"/contact"}>{t("Footer.7")}</NavLink></li>
                                </ul>

                            </Col>
                            <Col className={styles.network_contact} lg={4} md={12}>
                                <p>{t("Footer.8")}</p>
                                <span><i class='bx bx-stopwatch' ></i> 09:00 - 18:00, {t("Footer.12")}</span>
                                <Reveal>
                                    <h5>{t("Footer.11")}</h5>
                                </Reveal>
                                <button style={{ cursor: "pointer" }} type="submit">
                                    <a href='tel:+998 90 735 55 44'>
                                        {t("Footer.9")}
                                    </a>
                                </button>
                                <ul className={styles.social_media}>
                                    <li><a href="#"><i class='bx bxl-telegram' ></i></a></li>
                                    <li><a href="#"><i class='bx bxl-instagram' ></i></a></li>
                                    <li><a href="#"><i class='bx bxl-facebook'></i></a></li>
                                    <li><a href="#"><i class='bx bxl-youtube' ></i></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer