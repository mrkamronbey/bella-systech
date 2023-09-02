import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { Col, Row } from "react-grid-system";
const ProductApplication = ({ dataproductfilter }) => {
  const { t } = useTranslation();
  console.log(dataproductfilter, 'sds')
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <div className={styles.Container}>
      <h2>{t("Product.2")}</h2>
      <div className={styles.box}>
        <Row className={styles.ProductApplication_row}>
          <Col className={styles.ProductApplication_col} lg={6}>
            {dataproductfilter.map((elem, index) =>
              elem.sample?.slice(0, 3).map((e, index) => (
                <div className={styles.product_app_icon_wrapp}>
                  <div className={styles.square}>
                    <i class='bx bxs-square'></i>
                  </div>
                  <p>
                    {LanguValue() == "ru"
                      ? e.name_ru
                      : LanguValue() == "uz"
                        ? e.name_uz
                        : LanguValue() == "en"
                          ? e.name_en
                          : null}
                  </p>
                </div>
              ))
            )}
          </Col>
          <Col className={styles.ProductApplication_col} lg={6}>
            {dataproductfilter.map((elem, index) =>
              elem.sample?.slice(3, 6).map((e, index) => (
                <div className={styles.product_app_icon_wrapp}>
                  <div className={styles.square}>
                    <i class='bx bxs-square'></i>
                  </div>
                  <p>
                    {LanguValue() == "ru"
                      ? e.name_ru
                      : LanguValue() == "uz"
                        ? e.name_uz
                        : LanguValue() == "en"
                          ? e.name_en
                          : null}
                  </p>
                </div>
              ))
            )}
          </Col>
          <Col className={styles.ProductApplication_col} lg={6}>
            {dataproductfilter.map((elem, index) =>
              elem.sample?.slice(6, 9).map((e, index) => (
                <div className={styles.product_app_icon_wrapp}>
                  <div className={styles.square}>
                    <i class='bx bxs-square'></i>
                  </div>
                  <p>
                    {LanguValue() == "ru"
                      ? e.name_ru
                      : LanguValue() == "uz"
                        ? e.name_uz
                        : LanguValue() == "en"
                          ? e.name_en
                          : null}
                  </p>
                </div>
              ))
            )}
          </Col>
          <Col className={styles.ProductApplication_col} lg={6}>
            {dataproductfilter.map((elem, index) =>
              elem.sample?.slice(9, 12).map((e, index) => (
                <div className={styles.product_app_icon_wrapp}>
                  <div className={styles.square}>
                    <i class='bx bxs-square'></i>
                  </div>
                  <p>
                    {LanguValue() == "ru"
                      ? e.name_ru
                      : LanguValue() == "uz"
                        ? e.name_uz
                        : LanguValue() == "en"
                          ? e.name_en
                          : null}
                  </p>
                </div>
              ))
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductApplication;
