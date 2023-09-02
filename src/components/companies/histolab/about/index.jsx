import React from 'react'
import styles from "./style.module.css"
import { Col, Row } from "react-grid-system"
import AboutImage from "./../../../../assets/compaines/about-image.png"
import { useTranslation } from 'react-i18next'
import ImageAnimation from '../../../../common/image'
import Reveal from '../../../../utils/reveal/reveal'
const CompainesAbout = ({ filterCompany }) => {
    const { t } = useTranslation();
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <div className={styles.histolab_content_section}>
            <div className={styles.Container}>
                <Row className={styles.Rows}>
                    {
                        filterCompany.map(elem => (
                            <>
                                <Col className={styles.histolab_col} lg={6} md={12}>
                                    <div className={styles.Col}>
                                        <ImageAnimation
                                            style={{
                                                width: "100%",
                                                aspectRatio: 16 / 9
                                            }}
                                            src={AboutImage} />
                                    </div>
                                </Col>

                                <Col className={styles.histolab_col} lg={6} md={12}>
                                    <div className={styles.Col_Right}>
                                        <Reveal>
                                            <h2 className={styles.classys_title}>{
                                                LanguValue() == 'uz' ? elem.title_uz : LanguValue() == 'ru' ? elem.title_ru : LanguValue() == 'en' ? elem.title_en : null
                                            }</h2>
                                        </Reveal>
                                        <Reveal>
                                            <p className={styles.classys_text}>{
                                                LanguValue() == 'uz' ? elem.description_uz : LanguValue() == 'ru' ? elem.description_ru : LanguValue() == 'en' ? elem.description_en : null}</p>
                                        </Reveal>
                                    </div>
                                </Col>
                            </>
                        ))
                    }

                </Row>

            </div>
        </div>
    )
}

export default CompainesAbout