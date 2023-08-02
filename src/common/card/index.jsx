import React, { useState } from 'react'
import styles from './style.module.css'
import Reveal from '../../utils/reveal/reveal'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import ImageAnimation from '../image';




const CommonCard = ({
    src,
    card_title,
    details,
    order,
    card_btn_text1,
    card_btn_text2,
    card_description,
    isBtn,
    isTitle,
    isTime,
    style,
    timeText,
    textStyle
}) => {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={styles.card}>
                <div className={styles.card_img}>
                    <ImageAnimation src={src} style={style} />
                </div>
                <div className={styles.card_content}>
                    {
                        isTime == true ?
                            <Reveal>
                                <span className={styles.time}>{timeText}</span>
                            </Reveal>
                            : null
                    }
                    {
                        isTitle == true ?
                            <Reveal>
                                <h4 className={styles.card_titles}>{card_title}</h4>
                            </Reveal> : null
                    }
                    <Reveal>
                        <p className={styles.card_text} style={textStyle}>{card_description}</p>
                    </Reveal>
                    {
                        isBtn == true ?
                            <div className={styles.card_btn}>
                                <motion.button
                                    className={styles.card_btn_br}
                                    whileHover={{ scale: 1.07 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    }}
                                >
                                    <NavLink to={details}>
                                        {card_btn_text1}
                                    </NavLink>

                                </motion.button>
                                <motion.button
                                    className={styles.card_btn_bgc}
                                    whileHover={{ scale: 1.07 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 10
                                    }}
                                >
                                    <NavLink to={order}>
                                        {card_btn_text2}
                                    </NavLink>

                                </motion.button>
                            </div> : null
                    }

                </div>
            </motion.div>
        </>
    )
}

export default CommonCard