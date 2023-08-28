import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import Reveal from "./../../../utils/reveal/reveal";
const DescriptionProduct = ({ dataproductfilter }) => {
  const { t } = useTranslation();
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  console.log(dataproductfilter);
  return dataproductfilter.map((elem, index) =>
    elem.descriptions.map((e, index) => (
      <>
        <div className={styles.Container}>
          <hr />
          <div className={styles.Wrapper}>
            <Reveal>
              <h2>{t("Product.17")}</h2>
            </Reveal>
            <Reveal>
            <p style={{whiteSpace : "pre-wrap"}}>
        {LanguValue() == 'uz' ? e.description_uz: LanguValue() == 'ru' ? e.description_ru:LanguValue() == 'en' ? e.description_en:null}
        </p>
            </Reveal>
          </div>
          <div className={styles.Video}>
            <iframe
              width="100%"
              height="100%"
              src={e.youtube_link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </>
    ))
  );
};

export default DescriptionProduct;
