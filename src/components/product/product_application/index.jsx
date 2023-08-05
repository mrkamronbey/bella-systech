import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
const ProductApplication = () => {
    const {t} =useTranslation();
  const data = [1, 2, 3, 4 , 5 , 6 , 7, 8 ,9 , 10 , 11 ,12];

  return (
        <div className={styles.Container}>
            <h2>{t("Product.2")}</h2>
      <div className={styles.box}>
            <ul>
          {data.slice(0 , 3).map((elem, index) => (
              <li>
                Лазерная эпиляция
              </li>
          ))}
        </ul>
        <ul>
          {data.slice(3 , 6).map((elem, index) => (
              <li>
                Лазерная эпиляция
              </li>
          ))}
        </ul>
        <ul>
          {data.slice(6 , 9).map((elem, index) => (
              <li>
                Лазерная эпиляция
              </li>
          ))}
        </ul>
        <ul>
          {data.slice(9 , 12).map((elem, index) => (
              <li>
                Лазерная эпиляция
              </li>
          ))}
        </ul>
        </div>
        </div>
  )
}

export default ProductApplication