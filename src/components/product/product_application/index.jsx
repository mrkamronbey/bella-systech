import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
const ProductApplication = ({ dataproductfilter }) => {
  const { t } = useTranslation();
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <div className={styles.Container}>
      <h2>{t("Product.2")}</h2>
      <div className={styles.box}>
        <ul>
          {dataproductfilter.map((elem, index) =>
            elem.sample?.slice(0, 3).map((e, index) => (
              <>
                <li>
                  {LanguValue() == "uz"
                    ? e.name_ru
                    : LanguValue() == "ru"
                    ? e.name_uz
                    : LanguValue() == "en"
                    ? e.name_en
                    : null}
                </li>
              </>
            ))
          )}
        </ul>
        <ul>
          {dataproductfilter.map((elem, index) =>
            elem.sample?.slice(3, 6).map((e, index) => (
              <>
                <li>
                  {LanguValue() == "uz"
                    ? e.name_ru
                    : LanguValue() == "ru"
                    ? e.name_uz
                    : LanguValue() == "en"
                    ? e.name_en
                    : null}
                </li>
              </>
            ))
          )}
        </ul>
        <ul>
          {dataproductfilter.map((elem, index) =>
            elem.sample?.slice(6, 9).map((e, index) => (
              <>
                <li>
                  {LanguValue() == "uz"
                    ? elem.name_ru
                    : LanguValue() == "ru"
                    ? elem.name_uz 
                    : LanguValue() == "en"
                    ? elem.name_en
                    : null}
                </li>
              </>
            ))
          )}
        </ul>
        <ul>
          {dataproductfilter.map((elem, index) =>
            elem.sample?.slice(9, 12).map((e, index) => (
              <>
                <li>
                  {LanguValue() == "uz"
                    ? e.name_ru
                    : LanguValue() == "ru"
                    ? e.name_uz
                    : LanguValue() == "en"
                    ? e.name_en
                    : null}
                </li>
              </>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductApplication;
