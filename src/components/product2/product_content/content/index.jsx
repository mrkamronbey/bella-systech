import React from "react";
import Reveal from "../../../../utils/reveal/reveal";
import styles from "./style.module.css";
const Content = () => {
  return (
    <div className={styles.Wrapper}>
      <Reveal>
        <h3>Наименование товара</h3>
      </Reveal>
      <Reveal>
        <p>
          • Ультрасовременная запатентованная насадка,обновленный мотор и иглы,
          предназначенные длябыстрого, аккуратного и точного введения в кожу •
          Повышенный комфорт в каждом импульсе • Тысячи клинических тестов
          обеспечиваютоптимизированные протоколы для каждоготипа кожи и возраста
          • Единственная система для измеренияпоставляемой энергии
        </p>
      </Reveal>
      <div className={styles.buttons}>
        <Reveal>
          <a href="">
            <i class="bx bxs-file-doc"></i>Подробная информация
          </a>
        </Reveal>
        <Reveal>
          <button>Связаться для оформления заказа</button>
        </Reveal>
      </div>
    </div>
  );
};

export default Content;
