import React from 'react'
import styles from './style.module.css'
import Reveal from '../../utils/reveal/reveal'

const CommonCard = ({
    src,
    card_title,
    card_btn_text1,
    card_btn_text2,
    card_description,
}) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <img src={src} alt="image" />
                </div>
                <div className={styles.card_content}>
                    <Reveal>
                        <h4 className={styles.card_titles}>{card_title}</h4>
                    </Reveal>
                    <Reveal>
                        <p className={styles.card_text}>{card_description}</p>
                    </Reveal>
                    <div className={styles.card_btn}>
                        <button>{card_btn_text1}</button>
                        <button>{card_btn_text2}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonCard