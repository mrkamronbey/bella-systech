import React from 'react'
import styles from "./style.module.css"
import {Col , Row} from "react-grid-system"
import AboutImage from "./../../../../assets/compaines/about-image.png"
import { useTranslation } from 'react-i18next'
import ImageAnimation from '../../../../common/image'
import Reveal from '../../../../utils/reveal/reveal'
const CompainesAbout = () => {
    const {t} = useTranslation();
  return (
    <div className={styles.Container}>
        <Row className={styles.Rows}>
            <Col lg={6} md={12}>
                <div className={styles.Col}>
                    <ImageAnimation src={AboutImage}/>
                </div>
            </Col>
            
            <Col lg={6} md={12}>
                <div className={styles.Col_Right}>
                    <Reveal>
                <h2>{t("Compaines.0")}</h2>
                    </Reveal>
                    <Reveal>
                    <p>{t("Compaines.1")}</p>
                    </Reveal>
                </div>
            </Col>
        </Row>

    </div>
  )
}

export default CompainesAbout