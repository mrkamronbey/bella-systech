import React from 'react'
import HomeHero from '../../../common/hero'
import styles from "./style.module.css"
import ContentCompaines from './content'
const LutronicCompainesComponent = () => {
  return (
    <>
    <HomeHero title={"Lutronic"}  className={styles.Wrapper} Contact/>
    <ContentCompaines/>
    </>
  )
}

export default LutronicCompainesComponent