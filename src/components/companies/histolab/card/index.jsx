import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import CommonCard from "../../../../common/card";
import { Col, Row } from "react-grid-system";
import "./style.css";
const Card = () => {
  const { t } = useTranslation();
  const data = [1, 2, 3, 4, 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 ,12 , 13 , 15 , 16 , 17 , 18 , 19 , 20];

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div className={styles.box}>
          <h2>{t("Compaines.6")}</h2>
          <Row>
            {data.map(() => (
              <Col lg={4} md={12}>
                <div className={styles.slider_card_box}>
                  <CommonCard
                    src={
                      "https://llskin.ru/image/cache/catalog/VIA/VIAnew-642x470.png"
                    }
                    style={{ width: "100%", aspectRatio: 16 / 10 }}
                    card_title="Краткая информация"
                    card_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    card_btn_text1={t("Card.0")}
                    card_btn_text2={t("Card.1")}
                    details="/product"
                    order="#"
                    isBtn={true}
                    isTitle={true}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Card;
