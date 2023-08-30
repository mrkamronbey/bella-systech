import React from "react";
import Reveal from "../../../../utils/reveal/reveal";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
const Content = ({dataproductfilter}) => {
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const navigate = useNavigate();
  return (
    dataproductfilter.map((elem , index) => <>
     <div className={styles.Wrapper}>
      <Reveal>
        <h3>{LanguValue() == 'uz' ? elem.name_uz: LanguValue() == 'ru' ? elem.name_ru:LanguValue() == 'en' ? elem.name_en:null}</h3>
      </Reveal>
      <Reveal>
        <p style={{whiteSpace : "pre-wrap"}}>
        {LanguValue() == 'uz' ? elem.description_uz: LanguValue() == 'ru' ? elem.description_ru:LanguValue() == 'en' ? elem.description_en:null}
        </p>
      </Reveal>
      <div className={styles.buttons}>
        <a href={elem.pdf} target="_blank">
          <i class="bx bxs-file-doc"></i>Подробная информация
        </a>

        <button onClick={() => navigate("/contact")}>Связаться для оформления заказа</button>

      </div>
    </div>
    </>)
  );
};

export default Content;
