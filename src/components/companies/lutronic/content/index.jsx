import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import Reveal from '../../../../utils/reveal/reveal'
const ContentCompaines = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.lutronic_content_section}>
      <div className={styles.Container}>
        <Reveal>
          <h2 className={styles.lutronic_title}>{t("Compaines.3")}</h2>
        </Reveal>
        <Reveal>
          <p className={styles.lutronic_text}>{t("Compaines.4")}</p>
        </Reveal>


      </div>
    </div>
  )
}

export default ContentCompaines