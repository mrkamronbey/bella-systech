import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import { Row, Col } from "react-grid-system"
import { WrapperContainer } from './../../../style-app';
const BeforeAfter = ({dataproductfilter}) => {
  const { t } = useTranslation()
  return (
    dataproductfilter.map(elem => elem.design.map(e => <>
    <div className={styles.before_after_section}>
      <WrapperContainer>
        <h2>{t("Product.3")}</h2>
        <Row className={styles.before_after_row}>
          <Col className={styles.before_after_col} lg={6} md={12} sm={12}>
            <div className={styles.before_after_item}>
              <button className={styles.before_btn}>{t("BeforeAfter.0")}</button>
              <img src={e.before} style={{ aspectRatio: 16 / 9, width: "100%" }} />
            </div>
          </Col>
          <Col className={styles.before_after_col} lg={6} md={12} sm={12}>
            <div className={styles.before_after_item}>
              <button className={styles.after_btn}>{t("BeforeAfter.1")}</button>
              <img src={e.after} style={{ aspectRatio: 16 / 9, width: "100%" }} />
            </div>
          </Col>
        </Row>
      </WrapperContainer>
    </div>
    </>))
  )
}

export default BeforeAfter