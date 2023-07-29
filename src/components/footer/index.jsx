import React from 'react'
import styles from "./style.module.css"
import {Col , Row} from "react-grid-system"
import Logo from "./../../assets/logo.svg"
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Reveal from '../../utils/reveal/reveal'
const Footer = () => {
    const {t} = useTranslation();
  return (
    <div className={styles.Wrapper}>
    <div className={styles.Container}>
        <Row className={styles.row}>
            <Col md={12} lg={4} className={styles.Col_right}>
                    <div className={styles.box}>
                    <img src={Logo} alt="" />
                        <Reveal>                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quasi soluta consectetur distinctio vero quia perspiciatis </p></Reveal>
                <hr />
                <div className={styles.network}>
                    <a href="tel:+998 93 908 70 85"><i class='bx bxs-phone-call'></i> +998 93 908 70 85</a>
                    <a href="mailto:info@bella-systech.uz"><i class='bx bxs-envelope' ></i>info@bella-systech.uz</a>
                    <a href="https://www.google.com/maps/place/%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3524901,69.1887478,14z/data=!4m6!3m5!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98!8m2!3d41.2994958!4d69.2400734!16zL20vMGZzbXk?entry=ttu" target={"_blank"}><i class='bx bxs-map' ></i>г.Ташкент</a>
                </div>
                    </div>
            </Col>
            <Col md={12} lg={8}>
                <Row>
                <Col className={styles.navigation} md={12} lg={4}>
            <ul>
                <li><p>{t("Footer.0")}</p></li>
                <li><NavLink className={styles.Navlink} to={"/"}>Classys</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>Lutronic</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>Histolab</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>Skinwell</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>Bnv bio lab</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>Juvelook</NavLink></li>
            </ul>
            
            </Col>
            <Col className={styles.navigation} md={12} lg={4}>
            <ul>
                <li><p>{t("Footer.1")}</p></li>
                <li><NavLink className={styles.Navlink} to={"/"}>{t("Footer.2")}</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>{t("Footer.3")}</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>{t("Footer.4")}</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>{t("Footer.5")}</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>{t("Footer.6")}</NavLink></li>
                <li><NavLink className={styles.Navlink} to={"/"}>{t("Footer.7")}</NavLink></li>
            </ul>
            
            </Col>
            <Col className={styles.network_contact} md={12} lg={4}>
            <p>{t("Footer.8")}</p>
            <span><i class='bx bx-stopwatch' ></i> 09:00 - 18:00, По-су</span>
            <Reveal>
            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h5>

            </Reveal>
            <button style={{cursor:"pointer"}} type="submit">{t("Footer.9")}</button>
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