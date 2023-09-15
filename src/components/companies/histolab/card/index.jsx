import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import CommonCard from "../../../../common/card";
import { Col, Row } from "react-grid-system";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { PereparatGet } from '../../../../redux/pereparat/index'
const Card = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(PereparatGet())
  }, [])
  const preparatGetState = useSelector((state) => state.pereparat.PereparatGet?.data)
   function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.box}>
          <h2>{t("Compaines.6")}</h2>
          <Row className={styles.Row}>
            {
              preparatGetState.map(elem => (
                <Col className={styles.Col} lg={4}>
                  <CommonCard
                    className={styles.histolab_card}
                    width="100%"
                    src={elem.image1}
                    card_title={
                      LanguValue() == 'uz' ? elem.name_uz.length >= 20 ? `${elem.name_uz.slice(0, 20)}...` : elem.name_uz : LanguValue() == 'en' ? elem.name_en.length >= 20 ? `${elem.name_en.slice(0, 20)}...` : elem.name_en : LanguValue() == 'ru' ? elem.name_ru.length >= 20 ? `${elem.name_ru.slice(0, 20)}...` : elem.name_ru : elem.name_ru.length >= 20 ? `${elem.name_ru.slice(0, 20)}...` : elem.name_ru
                    }
                    // card_description={
                    //     LanguValue() == 'uz' ? `${elem.description_uz.slice(0, 150)}...` : LanguValue() == 'en' ? `${elem.description_en.slice(0, 150)}...` : LanguValue() == 'ru' ? `${elem.description_ru.slice(0, 150)}...` : null
                    // }
                    card_btn_text1={t("Card.0")}
                    card_btn_text2={t("Card.1")}
                    details={`/product2/${elem.id}`}
                    order="#"
                    isBtn={true}
                    isTitle={true}
                  />
                </Col>
              ))
            }
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Card;
