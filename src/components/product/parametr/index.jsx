import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Row, Col } from "react-grid-system";
import Reveal from "../../../utils/reveal/reveal";
const Parametr = () => {
  const data = [1, 2, 3, 4];
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.Container}>
        <h2>{t("Product.0")}</h2>
        <Row className={styles.Row}>
          <Col className={styles.Col} lg={6} md={12}>
            <ul>
              {data.map((elem, index) => (
                <Reveal>
                  <li key={index}>
                    <span>параметры 1</span> <span>информация 1</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </Col>
          <Col className={styles.Col} lg={6} md={12}>
            <ul>
              {data.map((elem, index) => (
                    <Reveal>
                                     <li key={index}>
                  <span>параметры 1</span> <span>информация 1</span>
                </li>
                    </Reveal>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
      <hr />
    </>
  );
};

export default Parametr;
