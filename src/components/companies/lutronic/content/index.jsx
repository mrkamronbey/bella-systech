import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
const ContentCompaines = () => {
    const {t} = useTranslation()
  return (
    <div className={styles.Container}>
        <h2>{t("Compaines.3")}</h2>
        <p>{t("Compaines.4")}</p>
    </div>
  )
}

export default ContentCompaines