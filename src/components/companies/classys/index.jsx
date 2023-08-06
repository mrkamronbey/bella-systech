import React from 'react'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import ContentCompaines from './content'
import BannerCard from './banner'
import ClassysCard from './classys-card'
import RequestConsultation from '../../home/request-consultation/index'
const ClassysCompainesComponent = () => {
  return (
    <>
      <HomeHero title={"Classys"} className={styles.Wrapper} Contact />
      <ContentCompaines />
      <BannerCard />
      <ClassysCard />
      <RequestConsultation />
    </>
  )
}

export default ClassysCompainesComponent