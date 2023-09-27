import React from "react";
import styles from './style.module.css'
import HomeHero from "../../../common/hero";
import { useTranslation } from "react-i18next";
import Counter from "./count/counter";

const BenefitsHero = () => {
    const { t } = useTranslation()
    return (
        <>
            <HomeHero title_style={{ color: "#fff" }} title={t("Benefits.1")} className={styles.benefits_hero}>
                <Counter />
            </HomeHero>
        </>
    )
}

export default BenefitsHero