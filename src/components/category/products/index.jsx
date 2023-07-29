import React from 'react'
import CommonCard from '../../../common/card'
import {Row , Col} from "react-grid-system"
import Img  from "./../../../assets/card/cardimg.png"
const CategoryProduct = () => {
    const data = [1 ,  2, 3 ,4 ,5] 
  return (
    <Row style={{marginTop: "10px"}}>
        {data.map(elem => 
    <Col lg={4} md={12} style={{marginBottom : "20px"}}>
        <CommonCard     src={Img}
        isTitle={true}
    card_title={"Краткая информация"}
    card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    </Col>
)}
    </Row>
  )
}

export default CategoryProduct