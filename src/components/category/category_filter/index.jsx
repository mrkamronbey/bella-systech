import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
const CategoryFilter = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>{t("Category.1")}</p>
      <div className={styles.checkbox}> 
        <input type="radio" id="age1" name="age" value="30" />
        <label for="age1">Эстетические лазеры</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age2" name="age" value="60" />
        <label for="age2">Контурная пластика и скульптурирование тела</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age3" name="age" value="100" />
        <label for="age3">Технологии для лица</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age4" name="age" value="100" />
        <label for="age4">Портативные устройства</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age5" name="age" value="100" />
        <label for="age5">Многофункциональные платформы</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="age6" name="age" value="100" />
        <label for="age6">Уход за кожей</label>
      </div>
      <p className={styles.Title}>{t("Category.2")}</p>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand1" name="brend" value="30" />
        <label for="brand1">Classys Lutronic</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand2" name="brend" value="60" />
        <label for="brand2">Histolab</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand3" name="brend" value="100" />
        <label for="brand3">Skinwell</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand4" name="brend" value="100" />
        <label for="brand4">Bnv bio lab</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brand4" name="brend" value="100" />
        <label for="brand4">Juvelook</label>
      </div>

    </div>
  );
};

export default CategoryFilter;
