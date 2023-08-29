import { WrapperContainer } from "../../../style-app";
import styled from "./style.module.css";
import React from "react";
import Reveal from '../../../utils/reveal/reveal'
import ImageAnimation from '../../../common/image/index'
import { useParams } from "react-router-dom";
import { NewsGet } from "../../../redux/news";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'

function More({ t }) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const newsGetState = useSelector((state) => state.news.newsGet?.data)
  const newsGetStateFilter = newsGetState.filter(elem => elem.id == id)
  console.log(newsGetStateFilter)
  useEffect(() => {
    dispatch(NewsGet())
  }, [])
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }
  const DateFormat = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join(".");
  };
  return (
    <>
      <WrapperContainer>
        <div className={styled.more_section}>
          <div className={styled.news_more_box}>
            {
              newsGetStateFilter.map(elem => (
                <>
                  <Reveal>
                    <h2 className={styled.news_more_title}>
                      {LanguValue() == 'uz' ? elem.title_uz : LanguValue() == 'en' ? elem.title_en : LanguValue() == 'ru' ? elem.title_ru : null}
                    </h2>
                  </Reveal>

                  <div className={styled.more_action_box}>
                    <ul>
                      <li>
                        <Reveal>
                          <p className={styled.news_more_text}>
                            <i class="bx bx-time-five"></i>
                            <span>
                              <span className={styled.more_span_underspan}>
                                {t("NewsPage.1")}
                              </span>
                              {DateFormat(elem.time_date)}
                            </span>
                          </p>
                        </Reveal>
                      </li>
                      {/* <li>
                        <Reveal>
                          <p className={styled.news_more_text}>
                            <ion-icon name="eye-outline"></ion-icon>
                            <span>
                              <span className={styled.more_span_underspan}>
                                {t("NewsPage.2")}
                              </span>{" "}
                              360
                            </span>
                          </p>
                        </Reveal>
                      </li>
                      <li>
                        <Reveal>
                          <p className={styled.news_more_text}>
                            <i class="bx bx-heart"></i>
                            <span>
                              <span className={styled.more_span_underspan}>
                                {t("NewsPage.3  ")}
                              </span>{" "}
                              5
                            </span>
                          </p>
                        </Reveal>
                      </li> */}
                    </ul>
                  </div>

                  <div className={styled.more_info_box}>
                    <ImageAnimation
                      style={{ aspectRatio: 16 / 9, width: "100%" }}
                      src={elem.image}
                      alt="photo"
                    />
                    <Reveal>
                      <p className={styled.description}>
                      {LanguValue() == 'uz' ? elem.description_uz : LanguValue() == 'en' ? elem.description_en : LanguValue() == 'ru' ? elem.description_ru : null}
                      </p>
                    </Reveal>
                    {/* <Reveal>
                      <p className={styled.description}>
                        Мы были безмерно рады личным встречам на стенде компании Bella -
                        systech № 303 и на выступлении наших спикеров: Спикер: Сельби
                        Пенаева, пластический хирург, косметолог клиники Natural Beauty
                        Clinic (Москва) Тема: Комплексная стратегия лечения пигментации
                        и технические возможности Лазера Q-Switch 1064/ 532нм , 595 QS.
                        Клинические кейсы. Спикер: Федоров Андрей, врач
                        дерматовенеролог, косметолог, главный врач Swiss beauty clinic
                        (Москва)Тема: Подготовка пациентов к проведению микроигольчатого
                        RF Genius Lutronic. От дермы до барьерных свойств эпидермиса:
                        обоснование, протоколы. Спикер: Татьяна Кирилюк,
                        врач-дерматолог, косметолог, тренер по аппаратным технологиям
                        (Москва)Тема: Повышение эффективности процедуры микроигольчатого
                        радиочастотного воздействия: Правильный отбор пациентов,
                        подготовка к процедуре, сочетание с тулиевым лазером и
                        использованием специальных сывороток с транексамовой и
                        аскорбиновой кислотой.
                      </p>
                    </Reveal> */}
                  </div>
                </>
              ))
            }

          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default More;
