import React from 'react'
import styles from "./style.module.css"
import { Col, Row } from "react-grid-system"
import ProductSlider from './slider'
import Content from './content'
const ProductContent = ({ dataproductfilter }) => {
  return (
    <div className={styles.Container}>
      <Row>
        <Col lg={5} md={12}>
          <ProductSlider dataproductfilter={dataproductfilter} />
        </Col>
        <Col lg={7} md={12}>
          <Content dataproductfilter={dataproductfilter} />
        </Col>
      </Row>
    </div>
  )
}

export default ProductContent