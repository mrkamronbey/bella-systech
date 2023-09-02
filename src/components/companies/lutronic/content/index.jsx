import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import Reveal from '../../../../utils/reveal/reveal'
const ContentCompaines = ({ filterCompany }) => {
  const { t } = useTranslation()
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <div className={styles.lutronic_content_section}>
      <div className={styles.Container}>
        {
          filterCompany.map(elem => (
            <>
              <Reveal>
                <h2 className={styles.lutronic_title}>{
                  LanguValue() == 'uz' ? elem.title_uz : LanguValue() == 'ru' ? elem.title_ru : LanguValue() == 'en' ? elem.title_en : null
                }</h2>
              </Reveal>
              <Reveal>
                <p className={styles.lutronic_text}>{
                  LanguValue() == 'uz' ? elem.description_uz : LanguValue() == 'ru' ? elem.description_ru : LanguValue() == 'en' ? elem.description_en : null}</p>
              </Reveal>
            </>
          ))
        }

      </div>
    </div>
  )
}

export default ContentCompaines