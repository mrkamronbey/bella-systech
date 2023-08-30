import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../../../utils/reveal/reveal";
import styles from "./style.module.css";
const PremiumProduct = ({dataproductfilter}) => {
  const { t } = useTranslation();
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <div className={styles.box}>
    <div className={styles.Container}>
      <h2>{t("Product.1")}</h2>
        <ul>
          {dataproductfilter.map((elem, index) => (
              <li key={index}>
                {LanguValue() == "ru" ? elem.product_benefits : LanguValue() == "uz" ? elem.product_benefits_uz :LanguValue() == "en" ? elem.product_benefits_en :null}
              </li>
          ))}
        </ul>
    </div>
    </div>
  );
};

export default PremiumProduct;
