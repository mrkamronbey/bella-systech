import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import Reveal from '../../../../utils/reveal/reveal'
const ContentCompaines = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.classys_content_section}>
      <div className={styles.Container}>
        <Reveal>
          <h2 className={styles.classys_title}>{t("Compaines.20")}</h2>
        </Reveal>
        <Reveal>
          <p className={styles.classys_text}>{t("Compaines.21")}</p>
        </Reveal>
      </div>
    </div>
  )
}

export default ContentCompaines