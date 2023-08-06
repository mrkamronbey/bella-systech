import React from "react";
import HomeHero from "../../common/hero";
import styled from "./style.module.css";
import NewsCards from "./news-cards";
import RegisterSlider from "../home/register-slider";
import RequestConsultation from "../home/request-consultation";
import { useTranslation } from "react-i18next";


function NewsComponent() {
  const { t } = useTranslation();
  const arr = [1, 2, 3, 4]

  return (
    <>
      <HomeHero title={t("NewsPage.0")} className={styled.NewsHero} />
      <NewsCards />
      <RegisterSlider />
      <RequestConsultation />
    </>
  );
}

export default NewsComponent;
