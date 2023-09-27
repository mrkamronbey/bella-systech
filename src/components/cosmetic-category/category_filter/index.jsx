import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AparatProductGetFilter } from "../../../redux/product-aparat";
import { useEffect } from "react";
import { CosmeticsGetFilter } from "../../../redux/cosmetic/index";
const CategoryFilter = ({ data, companies }) => {
  const { t } = useTranslation();
  const [Category , setCategory]  = useState();
  const [CompanyId , setCompanyId]  = useState();
  const dispatch = useDispatch();
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>{t("Category.1")}</p>
      {data.map((elem, index) => (
        <>
          <div key={index} className={styles.checkbox}>
            <input  onChange={ async (e)  => {
              await dispatch(CosmeticsGetFilter({ category : e.target.value , brand:CompanyId }))
              setCategory(e.target.value)
            }} type="radio" id="age1" name="age" value={elem.id} />
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
          <div key={index} className={styles.checkbox}>
            <input onChange={ async (e)  => {
              await dispatch(CosmeticsGetFilter({brand : e.target.value , category:Category })) 
              setCompanyId(e.target.value)
            }} type="radio" id={elem.id} name="brend" value={elem.id} />
            <label for={elem.id}>{elem.name}</label>
          </div>
        </>
      ))}
    </div>
  );
};

export default CategoryFilter;
