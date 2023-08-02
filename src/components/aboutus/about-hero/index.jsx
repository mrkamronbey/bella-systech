import React from "react";
import styles from './style.module.css'
import HomeHero from "../../../common/hero";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
    const {t} = useTranslation()
    return (
        <>
            <HomeHero title={t("AboutUs.0")} className={styles.about_hero} />
        </>
    )
}

export default AboutHero