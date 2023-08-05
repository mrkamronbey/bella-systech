import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../../../utils/reveal/reveal";
import styles from "./style.module.css";
const PremiumProduct = () => {
  const { t } = useTranslation();
  const data = [1, 2, 3, 4];
  return (
    <div className={styles.box}>
    <div className={styles.Container}>
      <h2>{t("Product.3")}</h2>
        <ul>
          {data.map((elem, index) => (
              <li>
                Высокая скорость - Быстрая эпиляция за счет высокой частоты
                подачи импульсов — до 10 Гц, насадкой диаметром до 25 мм.
                Повышается объем потенциальной прибыли
              </li>
          ))}
        </ul>
    </div>
    </div>
  );
};

export default PremiumProduct;
