import { useTranslation } from "react-i18next";
import { Wrapper } from "./styled-index";
import { useState } from "react";
import { Select } from 'antd';

// import RusLogo from "../../../assets/header/ru-logo.svg";
// import UzbLogo from "../../../assets/header/uz-flag.png";

function LanguageHeader({ HandleClick }) {
  const { t, i18n } = useTranslation();
  const handleChange = (value, label) => {
    const lang = value;
    i18n.changeLanguage(lang);
    // window.location.reload();
    console.log(`selected ${value}`);
    window.localStorage.setItem('label', label.label)
    window.location.reload()
  };
  function LanguValue() {
    return window.localStorage.getItem("i18nextLng");
  }

  return (
    <Wrapper>
      {LanguValue() === "ru" ? (

        <>
          <i class='bx bx-globe'></i>
          <div className='svgs'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_108_15600)">
                <path d="M4 5H11" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 3V5C9 9.418 6.761 13 4 13" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 9C5 11.144 7.952 12.908 11.7 13" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 20L16 11L20 20" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.0999 18H12.8999" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_108_15600">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </>
      ) : LanguValue() === "en" ? (
        <>
          <i class='bx bx-globe'></i>
          <div className='svgs'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_108_15600)">
                <path d="M4 5H11" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 3V5C9 9.418 6.761 13 4 13" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 9C5 11.144 7.952 12.908 11.7 13" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 20L16 11L20 20" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.0999 18H12.8999" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_108_15600">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </>
      ) : LanguValue() === "uz" ? (
        <>
          <i class='bx bx-globe'></i>
          <div className='svgs'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_108_15600)">
                <path d="M4 5H11" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 3V5C9 9.418 6.761 13 4 13" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 9C5 11.144 7.952 12.908 11.7 13" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 20L16 11L20 20" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.0999 18H12.8999" stroke="#444444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_108_15600">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </>
      ) : null}
      <Select
        defaultValue={
          LanguValue() == "ru" ? t("Lang.0") : LanguValue() == "en" ? t("Lang.1") : LanguValue() == "uz" ? t("Lang.2") : t("Lang.0")
        }
        bordered={false}
        style={{ width: 130 }}
        onChange={handleChange}
        options={
          LanguValue() == "ru" ?
            [
              { value: 'ru', label: t("Lang.0") },
              { value: 'en', label: t("Lang.1") },
              { value: 'uz', label: t("Lang.2") }
            ] :
            LanguValue() == "en" ?
              [
                { value: 'ru', label: t("Lang.0") },
                { value: 'en', label: t("Lang.1") },
                { value: 'uz', label: t("Lang.2") }
              ] :
              LanguValue() == "uz" ?
                [
                  { value: 'ru', label: t("Lang.0") },
                  { value: 'en', label: t("Lang.1") },
                  { value: 'uz', label: t("Lang.2") },
                ] : [
                  { value: 'ru', label: t("Lang.0") },
                  { value: 'en', label: t("Lang.1") },
                  { value: 'uz', label: t("Lang.2") }
                ]
        }
      />
    </Wrapper>
  );
}
export default LanguageHeader;
