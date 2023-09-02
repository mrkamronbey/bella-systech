import React, { useEffect } from 'react'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import ContentCompaines from './content'
import BannerCard from './banner'
import ClassysCard from './classys-card'
import RequestConsultation from '../../home/request-consultation/index'
import { CompanyGet } from '../../../redux/company'
import { useDispatch, useSelector } from 'react-redux'

const ClassysCompainesComponent = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CompanyGet())
  }, [])
  const companyGetState = useSelector((state) => state.company.CompanyGet?.data)
  const filterCompany = companyGetState.filter(elem => elem.name == 'Classys')
  return (
    <>
      <HomeHero title={"Classys"} className={styles.Wrapper} Contact />
      <ContentCompaines filterCompany={filterCompany} />
      <BannerCard filterCompany={filterCompany} />
      <ClassysCard />
      <RequestConsultation />
    </>
  )
}

export default ClassysCompainesComponent