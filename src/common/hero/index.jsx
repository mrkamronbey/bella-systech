import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from "./style.module.css"
const HomeHero = ({title , description , className , Contact }) => {
    const {t} = useTranslation()
  return (
    <div className={className}>
        <div className={styles.Container}>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default HomeHero