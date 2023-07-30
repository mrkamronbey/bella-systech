import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
const CategoryFilterData = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.Wrapper}>
      <p className={styles.Title}>{t("Category.1")}</p>
      <div className={styles.checkbox}> 
        <input type="radio" id="ageMobile1" name="ageMobile" value="30" />
        <label for="ageMobile1">Эстетические лазеры</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="ageMobile2" name="ageMobile" value="60" />
        <label for="ageMobile2">Контурная пластика и скульптурирование тела</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="ageMobile3" name="ageMobile" value="100" />
        <label for="ageMobile3">Технологии для лица</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="ageMobile4" name="ageMobile" value="100" />
        <label for="ageMobile4">Портативные устройства</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="ageMobile5" name="ageMobile" value="100" />
        <label for="ageMobile5">Многофункциональные платформы</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="ageMobile6" name="ageMobile" value="100" />
        <label for="ageMobile6">Уход за кожей</label>
      </div>
      <p className={styles.Title}>{t("Category.2")}</p>
      <div className={styles.checkbox}> 
        <input type="radio" id="brandMobile1" name="brend" value="30" />
        <label for="brandMobile1">Classys Lutronic</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brandMobile2" name="brend" value="60" />
        <label for="brandMobile2">Histolab</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brandMobile3" name="brend" value="100" />
        <label for="brandMobile3">Skinwell</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brandMobile4" name="brend" value="100" />
        <label for="brandMobile4">Bnv bio lab</label>
      </div>
      <div className={styles.checkbox}> 
        <input type="radio" id="brandMobile4" name="brend" value="100" />
        <label for="brandMobile4">Juvelook</label>
      </div>

    </div>
  );
};

export default CategoryFilterData;
