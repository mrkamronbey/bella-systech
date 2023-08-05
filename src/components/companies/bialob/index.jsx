import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
const BialogComponent = () => {
  const {t} = useTranslation()
  return (
    <div>
    <HomeHero title={t("Category.0")}  className={styles.Wrapper} Contact/>

    </div>
  )
}

export default BialogComponent