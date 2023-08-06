import React from 'react'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import ContentCompaines from './content'
import BannerCard from './banner'
import LutronicCard from './lutronic-card'
import RequestConsultation from '../../home/request-consultation/index'


const LutronicCompainesComponent = () => {
  return (
    <>
      <HomeHero title={"Lutronic"} className={styles.Wrapper} Contact />
      <ContentCompaines />
      <BannerCard />
      <LutronicCard />
      <RequestConsultation />
    </>
  )
}

export default LutronicCompainesComponent