import React from "react";
import { Col, Row } from "react-grid-system";
import CommonCard from "../../../common/card";
import NewsCardImg from "../../../assets/news/newscard.png";
import { WrapperContainer } from "../../../style-app";
import styled from "./style.module.css";
import { NavLink } from "react-router-dom";

function NewsCards() {
  const Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <div className={styled.news_cards_section}>
      <WrapperContainer>
        <Row style={{ margin: 0 }}>
          {Data.map(() => (
            <Col xxl={6} xxxl={6} lg={6} md={6} sm={12} className={styled.Col}>
              <NavLink to={"/more"}>
                <CommonCard
                  src={NewsCardImg}
                  style={{ aspectRatio: 16 / 9 }}
                  timeText={"18.05.2023"}
                  card_description={
                    "Bella-systech на Летнем Конгрессе Пластическая, реконструктивная хирургия и косметология"
                  }
                  isTime={true}
                  isTitle={true}
                  textStyle={{ fontWeight: 600 }}
                />
              </NavLink>
            </Col>
          ))}
        </Row>
      </WrapperContainer>
    </div>
  );
}

export default NewsCards;
