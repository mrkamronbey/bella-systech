
import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from "./style.module.css"
import Reveal from '../../utils/reveal/reveal'
const HomeHero = ({ title, description, className, Contact, children, title_style, id }) => {
  const { t } = useTranslation()
  return (
    <div className={className}>
      <div className={styles.Container}>
        <div className={styles.hero_content}>
          <Reveal>
            <h1 style={title_style} id={id} className={styles.hero_title}>{title}</h1>
          </Reveal>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HomeHero;
