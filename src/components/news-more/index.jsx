import React from "react";
import More from "./more";
import SimilarNews from "./similar-news";
import RegisterSlider from "../home/register-slider";
import RequestConsultation from "../home/request-consultation";
import { useTranslation } from "react-i18next";

function NewsMoreComponent() {
  const { t } = useTranslation();
  return (
    <>
      <More t={t} />
      <SimilarNews t={t} />
      <RegisterSlider />
      <RequestConsultation />
    </>
  );
}

export default NewsMoreComponent;
