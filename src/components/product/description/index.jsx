import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "./style.module.css"
import Reveal from "./../../../utils/reveal/reveal"
const DescriptionProduct = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.Container}>
      <hr />
      <div className={styles.Wrapper}>
        <Reveal>
          <h2>{t("Product.17")}</h2>
        </Reveal>
        <Reveal>
          <p>
            SKIN TYPES: Dry, Normal, Oily, Combination, Sensitive
            SKIN CONCERN: Sensitized, Dehydrated, Acne, Aging
            FEATURES: Hydrating B5 Gel replenishes nutrients the skin needs to feel smooth and appear younger. This oil free moisturizer combines vitamin B5 with hyaluronic acid, the body’s natural hydrator, to help bind moisture to the skin. It can be used alone or with a daily moisturizer to provide extra hydration, and is an ideal moisturizer for acne prone skin.
          </p>
        </Reveal>
      </div>
      <div className={styles.Video}>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BzjhZEeGlio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default DescriptionProduct