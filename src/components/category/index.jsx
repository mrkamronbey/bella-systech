import React from 'react'
import { useTranslation } from 'react-i18next'
import HomeHero from '../../common/hero'
import styles from "./style.module.css"
const CategoryComponent = () => {
    const {t} = useTranslation();
  return (
    <>
    <HomeHero title={t("Category.0")}  className={styles.Wrapper} Contact/>
    </>
  )
}

export default CategoryComponent