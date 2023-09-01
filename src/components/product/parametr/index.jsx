import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Row, Col } from "react-grid-system";
import Reveal from "../../../utils/reveal/reveal";
const Parametr = ({ dataproductfilter }) => {
  const data = [1, 2, 3, 4];
  const { t } = useTranslation();
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <>
      {dataproductfilter.map(elem =>
        <div className={styles.parametr_section}>
          <div className={styles.Container}>
            <h2>{t("Product.5")}</h2>
            <Row className={styles.Row}>
              <Col className={styles.Col} lg={6} md={12}>
                <ul>
                  {elem.parametr.slice(0, 5).map((e, index) => (
                    <Reveal>
                      <li key={index}>
                        <span>{LanguValue() == 'ru' ? e.parametr_ru : LanguValue() == 'uz' ? e.parametr_uz : LanguValue() == 'en' ? e.parametr_en : null}</span> <span>{LanguValue() == 'uz' ? e.information_uz : LanguValue() == 'ru' ? e.information_ru : LanguValue() == 'en' ? e.information_en : null}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </Col>
              <Col className={styles.Col} lg={6} md={12}>
                <ul>
                  {elem.parametr.slice(5, 10).map((e, index) => (
                    <Reveal>
                      <li key={index}>
                        <span>{LanguValue() == 'ru' ? e.parametr_ru : LanguValue() == 'uz' ? e.parametr_uz : LanguValue() == 'en' ? e.parametr_en : null}</span> <span>{LanguValue() == 'uz' ? e.information_uz : LanguValue() == 'ru' ? e.information_ru : LanguValue() == 'en' ? e.parametr_en : null}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </div>)}

    </>
  );
};

export default Parametr;
