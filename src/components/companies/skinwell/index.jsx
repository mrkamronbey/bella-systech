import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import CompainesAbout from './about/index'
import RequestConsultation from '../../home/request-consultation'
import BannerSkillWell from './banner-skillwell'
import { CompanyGet } from '../../../redux/company'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const SkinwellComponent = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CompanyGet())
  }, [])
  const companyGetState = useSelector((state) => state.company.CompanyGet?.data)
  const filterCompany = companyGetState.filter(elem => elem.name == 'Skinwell')
  return (
    <>
      <HomeHero title_style={{color: "#fff"}} title={t("Skinwell")} className={styles.Wrapper} Contact />
      <CompainesAbout filterCompany={filterCompany} />
      <BannerSkillWell filterCompany={filterCompany} />
      <RequestConsultation />
    </>
  )
}

export default SkinwellComponent