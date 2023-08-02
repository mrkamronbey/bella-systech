import React from "react";
import styles from './style.module.css'
import HomeHero from "../../../common/hero";
import { useTranslation } from "react-i18next";

const JoinHero = () => {
    const {t} = useTranslation()
    return (
        <>
            <HomeHero title={t("Cooperation.0")} className={styles.join_hero} />
        </>
    )
}

export default JoinHero