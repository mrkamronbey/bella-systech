import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
const CategoryFilter = ({ data, companies }) => {
  const { t } = useTranslation();
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>{t("Category.1")}</p>
      {data.map((elem, index) => (
        <>
          <div key={index} className={styles.checkbox}>
            <input type="radio" id="age1" name="age" value="30" />
            <label for="age1">
              {LanguValue() == "uz"
                ? elem.title_uz
                : LanguValue() == "ru"
                ? elem.title_ru
                : LanguValue() == "en"
                ? elem.title_en
                : null}
            </label>
          </div>
        </>
      ))}
      <p className={styles.Title}>{t("Category.2")}</p>
      {companies.map((elem, index) => (
        <>
          <div className={styles.checkbox}>
            <input type="radio" id="brand1" name="brend" value="30" />
            <label for="brand1">{LanguValue() == "uz"
                ? elem.title_uz
                : LanguValue() == "ru"
                ? elem.title_ru
                : LanguValue() == "en"
                ? elem.title_en
                : null}</label>
          </div>
        </>
      ))}
    </div>
  );
};

export default CategoryFilter;
