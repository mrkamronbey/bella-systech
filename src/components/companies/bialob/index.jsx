import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import CompainesAbout from './about/index'
import Card from './card'
import RequestConsultation from '../../home/request-consultation'
import { CompanyGet } from '../../../redux/company'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const BialogComponent = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CompanyGet())
  }, [])
  const companyGetState = useSelector((state) => state.company.CompanyGet?.data)
  console.log(companyGetState, 'biolab')
  const filterCompany = companyGetState.filter(elem => elem.name == 'BNV Biolab')
  return (
    <div>
      <HomeHero title_style={{color: "#fff"}} title={t("BNV Biolab")} className={styles.Wrapper} Contact />
      <CompainesAbout filterCompany={filterCompany} />
      <Card filterCompany={filterCompany} />
      <RequestConsultation />
    </div>
  )
}

export default BialogComponent