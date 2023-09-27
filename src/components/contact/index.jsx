import React from "react";
import HomeHero from "../../common/hero";
import styled from "./style.module.css";
import Location from "./location";
import RequestConsultation from "../home/request-consultation";
import { useTranslation } from "react-i18next";

function ContactComponent() {
  const { t } = useTranslation();
  return (
    <>
      <HomeHero title_style={{color: "#fff"}} className={styled.contact_hero} title={t("Contact.0")} />
      <Location t={t} />
      <RequestConsultation />
    </>
  );
}

export default ContactComponent;
