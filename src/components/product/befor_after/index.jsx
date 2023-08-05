import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import {Row , Col} from "react-grid-system"
import ImageAnimation from "./../../../common/image/index"
const BeforeAfter = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.box}>
        <div className={styles.Container}>
        <h2>{t("Product.3")}</h2>
            <div className={styles.Wrapper}>
                <div className={styles.Photos}>
                    
                </div>
                <div className={styles.Video}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default BeforeAfter