import React from 'react'
import CommonCard from '../../../common/card'
import { Row, Col } from "react-grid-system"
import { NavLink } from 'react-router-dom'
const CategoryProduct = ({ dataproduct }) => {
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <Row style={{ marginTop: "10px" }}>
      {dataproduct.map((elem, index) =>
        <Col key={index} lg={4} md={12} style={{ marginBottom: "20px" }}>
          <NavLink style={{ textDecoration: "none" }} to={`/product/${elem.id}`}>
            <CommonCard
              src={elem.image1}
              isTitle={true}
              card_title={LanguValue() == 'uz' ? elem.name_uz : LanguValue() == 'en' ? elem.name_en : LanguValue() == 'ru' ? elem.name_ru : null}
              card_description={LanguValue() == 'uz' ? elem.description_uz.slice(0, 50) : LanguValue() == 'en' ? elem.description_en.slice(0, 50) : LanguValue() == 'ru' ? elem.description_ru.slice(0, 50) : null}
              style={{
                aspectRatio: 3 / 4,
                width: '100%',
                height: "300px"
              }}
            />
          </NavLink>
        </Col>
      )}
    </Row>
  )
}

export default CategoryProduct