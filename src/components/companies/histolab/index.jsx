import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import CompainesAbout from './about/index'
import Card from './card'
import RequestConsultation from '../../home/request-consultation'
const HistolabComponent = () => {
  const {t} = useTranslation()
  return (
    <div>
    <HomeHero title={t("Histolab")}  className={styles.Wrapper} Contact/>
    <CompainesAbout/>
    <Card/>
    <RequestConsultation/>
    </div>
  )
}

export default HistolabComponent