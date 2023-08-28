import React, { useEffect } from "react";
import { Col, Row } from "react-grid-system";
import CommonCard from "../../../common/card";
import NewsCardImg from "../../../assets/news/newscard.png";
import { WrapperContainer } from "../../../style-app";
import styled from "./style.module.css";
import { NavLink } from "react-router-dom";
import { NewsGet } from "../../../redux/news";
import { useDispatch, useSelector } from "react-redux";

function NewsCards() {
  const dispatch = useDispatch()
  const newsGetState = useSelector((state) => state.news.newsGet?.data)
  console.log(newsGetState)
  useEffect(() => {
    dispatch(NewsGet())
  }, [])
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join(".");
  };

  return (
    <div className={styled.news_cards_section}>
      <WrapperContainer>
        <Row style={{ margin: 0 }}>
          {newsGetState.map((elem) => (
            <Col xxl={6} xxxl={6} lg={6} md={6} sm={12} className={styled.Col}>
              <NavLink style={{ textDecoration: "none" }} to={`/newsmore/${elem.id}`}>
                <CommonCard
                  className={styled.news_cards}
                  src={elem.image}
                  style={{ aspectRatio: 16 / 9 }}
                  timeText={DateFormat(elem.time_date)}
                  card_description={LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 50)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 50)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 50)}...` : null}
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
