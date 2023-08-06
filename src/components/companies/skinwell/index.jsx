import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import CompainesAbout from './about/index'
import RequestConsultation from '../../home/request-consultation'
import BannerSkillWell from './banner-skillwell'
const SkinwellComponent = () => {
  const { t } = useTranslation()
  return (
    <>
      <HomeHero title={t("Skinwell")} className={styles.Wrapper} Contact />
      <CompainesAbout />
      <BannerSkillWell />
      <RequestConsultation />
    </>
  )
}

export default SkinwellComponent