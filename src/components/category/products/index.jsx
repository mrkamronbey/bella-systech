import React from 'react'
import CommonCard from '../../../common/card'
import { Row, Col } from "react-grid-system"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CategoryProduct = ({ dataproduct }) => {
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const data = useSelector(state => state.aparatproduct.AparatProductGetFilter)
  return (
    <Row style={{ marginTop: "10px" }}>
      {data.success == false ? dataproduct.map((elem, index) =>
        <Col key={index} lg={4} md={6} style={{ marginBottom: "30px" }}>
          <NavLink style={{ textDecoration: "none" }} to={`/product/${elem.id}`}>
            <CommonCard
              src={elem.image1}
              isTitle={true}
              card_title={LanguValue() == 'uz' ? `${elem.name_uz.slice(0, 15)}...` : LanguValue() == 'en' ? `${elem.name_en.slice(0, 15)}...` : LanguValue() == 'ru' ? `${elem.name_ru.slice(0, 15)}...` : `${elem.name_ru.slice(0, 15)}...`}
              card_description={LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 30)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 30)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 30)}...` : `${elem.description_ru.slice(0, 30)}...`}
              style={{
                aspectRatio: 3 / 4,
                width: '100%',
              }}
            />
          </NavLink>
        </Col>
      ) : data?.data.map((elem, index) =>
        <Col key={index} lg={4} md={6} style={{ marginBottom: "30px" }}>
          <NavLink style={{ textDecoration: "none" }} to={`/product/${elem.id}`}>
            <CommonCard src={elem.image1}
              isTitle={true}
              card_title={LanguValue() == 'uz' ? elem.name_uz.length >= 15 ? `${elem.name_uz.slice(0, 15)}...` : elem.name_uz : LanguValue() == 'en' ? elem.name_en.length >= 15 ? `${elem.name_en.slice(0, 15)}...` : elem.name_en : LanguValue() == 'ru' ? elem.name_ru.length >= 15 ? `${elem.name_ru.slice(0, 15)}...` : elem.name_ru : elem.name_ru.length >= 15 ? `${elem.name_ru.slice(0, 15)}...` : elem.name_ru}
              card_description={LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 30)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 30)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 30)}...` : `${elem.description_ru.slice(0, 30)}...`}
            />
          </NavLink>
        </Col>
      )}
    </Row>
  )
}

export default CategoryProduct