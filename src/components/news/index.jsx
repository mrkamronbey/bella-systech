import React from "react";
import HomeHero from "../../common/hero";
import styled from "./style.module.css";
import NewsCards from "./news-cards";
import RegisterSlider from "../home/register-slider";
import RequestConsultation from "../home/request-consultation";
import { useTranslation } from "react-i18next";
import Banner from '../../common/banner/index'
import BannerImg from '../../assets/banner/banner_img1.png'

function NewsComponent() {
  const { t } = useTranslation();
  const arr = [1, 2, 3, 4]

  return (
    <>
      <HomeHero title={t("NewsPage.0")} className={styled.NewsHero} />
      <NewsCards />
      {
        arr.map(() => (
          <Banner
            title="Идеальная система для омоложения кожи и доставки космецевтических средств"
            description=' Уникальная система, сочетающая в себе тулиевый лазер и эксклюзивную линию космецевтики'
            link='/products'
            img={BannerImg}
          />
        ))
      }
      <RegisterSlider />
      <RequestConsultation />
    </>
  );
}

export default NewsComponent;
