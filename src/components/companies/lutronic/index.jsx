import React from 'react'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import ContentCompaines from './content'
import BannerCard from './banner'
import LutronicCard from './lutronic-card'
import RequestConsultation from '../../home/request-consultation/index'
import { CompanyGet } from '../../../redux/company'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const LutronicCompainesComponent = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(CompanyGet())
  }, [])
  const companyGetState = useSelector((state) => state.company.CompanyGet?.data)
  const filterCompany = companyGetState.filter(elem => elem.name == 'Lutronic')
  return (
    <>
      <HomeHero title={"Lutronic"} className={styles.Wrapper} Contact />
      <ContentCompaines filterCompany={filterCompany} />
      <BannerCard filterCompany={filterCompany} />
      <LutronicCard />
      <RequestConsultation />
    </>
  )
}

export default LutronicCompainesComponent