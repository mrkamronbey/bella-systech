import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import { Row, Col } from "react-grid-system"
import Icon1 from "./../../../assets/product/1.png"
import Icon2 from "./../../../assets/product/2.png"
import Icon3 from "./../../../assets/product/3.png"
import Icon4 from "./../../../assets/product/4.png"
import Icon5 from "./../../../assets/product/5.png"
import Icon6 from "./../../../assets/product/6.png"
import Icon7 from "./../../../assets/product/7.png"
import Icon8 from "./../../../assets/product/8.png"

const Buying = ({ dataproductfilter }) => {
    console.log(dataproductfilter, 'buying')
    const { t } = useTranslation()
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <div className={styles.box}>
            <div className={styles.Container}>
                <h2>
                    {
                        dataproductfilter.map(elem => (
                            LanguValue() == "ru" ? `Покупая ${elem.name_ru} в компании Bella-systech, вы получаете:` :
                                LanguValue() == "en" ? `Buying ${elem.name_en} from Bella-systech, you get:` :
                                    LanguValue() == "uz" ? `Bella-systech-dan ${elem.name_uz}-ni sotib olib, siz quyidagilarni olasiz:` : `Покупая ${elem.name_ru} в компании Bella-systech, вы получаете:`
                        ))
                    }

                </h2>
                <Row className={styles.Row}>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon1} width={50} height={50} alt="" />
                            <p>{t("Product.7")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon2} width={50} height={50} alt="" />
                            <p>{t("Product.8")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon3} width={50} height={50} alt="" />
                            <p>{t("Product.9")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon4} width={50} height={50} alt="" />
                            <p>{t("Product.10")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon5} width={50} height={50} alt="" />
                            <p>{t("Product.11")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon6} width={50} height={50} alt="" />
                            <p>{t("Product.12")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon7} width={50} height={50} alt="" />
                            <p>{t("Product.13")}</p>
                        </div>
                    </Col>
                    <Col className={styles.Cols} lg={3} md={12}>
                        <div className={styles.Col}>
                            <img src={Icon8} width={50} height={50} alt="" />
                            <p>{t("Product.14")}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Buying