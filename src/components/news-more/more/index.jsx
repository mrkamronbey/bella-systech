import { WrapperContainer } from "../../../style-app";
import styled from "./style.module.css";
import MoreImg from "../../../assets/news/newscard.png";
import React from "react";

function More({ t }) {
  return (
    <>
      <WrapperContainer>
        <div className={styled.more_section}>
          <div className={styled.news_more_box}>
            <h2>
              Bella-systech на Летнем Конгрессе Пластическая, реконструктивная
              хирургия и косметология
            </h2>

            <div className={styled.more_action_box}>
              <ul>
                <li>
                  <p>
                    <i class="bx bx-time-five"></i>
                    <span>
                      <span className={styled.more_span_underspan}>
                        {t("NewsPage.1")}
                      </span>
                      27-mart, 2023
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <ion-icon name="eye-outline"></ion-icon>
                    <span>
                      <span className={styled.more_span_underspan}>
                        {t("NewsPage.2")}
                      </span>{" "}
                      360
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <i class="bx bx-heart"></i>
                    <span>
                      <span className={styled.more_span_underspan}>
                        {t("NewsPage.3  ")}
                      </span>{" "}
                      5
                    </span>
                  </p>
                </li>
              </ul>
            </div>

            <div className={styled.more_info_box}>
              <img
                style={{ aspectRatio: 16 / 9, width: "100%" }}
                src={MoreImg}
                alt="photo"
              />
              <p className={styled.description}>
                В рамках конгресса были проведены научные выступления:«Истинное
                омоложение кожи с применением нового комбинированного протокола
                Тotal Skin solution на аппаратах Genius и LaseMd от компании
                Lutronic» Наида Алиева, врач-дерматолог высшей категории,
                основатель клиники VerNa3, Международный эксперт в области
                аппаратной косметологии.«Новые возможности омоложения на
                аппарате Ultraformer Mpt: комбинация легендарного smas-лифтинга
                и трансдермальной доставки активных компонентов специального
                бустера в одной процедуре» Никита Артемов, врач-дерматолог,
                косметолог, сертифицированный тренер
                Bella-Systech«Противовоспалительное действие ФДТ – точки
                приложения методики на стыке специальностей» Харахордин Олег,
                врач-дерматолог, косметолог, сертифицированный тренер
                Bella-Systech.Благодарим всех посетителей стенда Bella-systech
                за активное внимание и надеемся на множество повторных встреч
              </p>
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
            </div>
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}

export default More;
