import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import CompainesAbout from './about/index'
import RequestConsultation from '../../home/request-consultation'
const SkinwellComponent = () => {
  const {t} = useTranslation()
  return (
    <div>
    <HomeHero title={t("Skinwell")}  className={styles.Wrapper} Contact/>
    <CompainesAbout/>
    <RequestConsultation/>
    </div>
  )
}

export default SkinwellComponent