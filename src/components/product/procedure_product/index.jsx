import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import {Row , Col} from "react-grid-system"
import ImageAnimation from "./../../../common/image/index"
const Procedura = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.box}>
        <div className={styles.Container}>
            <div className={styles.Wrapper}>
                <div className={styles.Photos}>
                    <h2>{t("Product.4")}</h2>
                  <Row className={styles.Row}>
                    <Col className={styles.Col} lg={6} md={12}><ImageAnimation style={{width: "100%",
                                    aspectRatio: "16 / 9",}} src={"https://mositalmed.ru/wp-content/uploads/kosmetologia.png"}/></Col>
                    <Col className={styles.Col} lg={6} md={12}><ImageAnimation style={{width: "100%",
                                    aspectRatio: "16 / 9",}} src={"https://mositalmed.ru/wp-content/uploads/kosmetologia.png"}/></Col>
                    <Col className={styles.Col} lg={6} md={12}><ImageAnimation style={{width: "100%",
                                    aspectRatio: "16 / 9",}} src={"https://mositalmed.ru/wp-content/uploads/kosmetologia.png"}/></Col>
                    <Col className={styles.Col} lg={6} md={12}><ImageAnimation style={{width: "100%",
                                    aspectRatio: "16 / 9",}} src={"https://mositalmed.ru/wp-content/uploads/kosmetologia.png"}/></Col>
                  </Row>
                </div>
                <div className={styles.Video}>
                <h2>{t("Product.5")}</h2>
                <iframe width="100%" style={{borderRadius : "12px"}} height="79.5%" src="https://www.youtube.com/embed/BzjhZEeGlio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Procedura