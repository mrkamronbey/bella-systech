import React from "react";
import styles from './style.module.css'
import HomeHero from "../../../common/hero";
import { useTranslation } from "react-i18next";
import './styles.css'

const AboutHero = () => {
    const {t} = useTranslation()
    return (
        <>
            <HomeHero id='#about_hero_title' title_style={{color: "#fff"}} title={t("AboutUs.0")} className={styles.about_hero} />
        </>
    )
}

export default AboutHero