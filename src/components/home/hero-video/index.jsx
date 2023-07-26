import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'
import './style.css'
import Reveal from '../../../utils/reveal/reveal'
import { motion, useViewportScroll, useTransform } from "framer-motion";


const HeroVideo = () => {
    const { t } = useTranslation()
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <>
            <motion.div
                // transition={{ duration: 1, ease: "easeIn" }}
                // style={{scale}}
                className={styles.hero_video}>
                <div className={styles.video_wrapp}>
                    <div className={styles.video_content}>
                        <div>
                            <Reveal>
                                <h4 className={styles.video_title}>{t("HeroVideo.0")}</h4>
                            </Reveal>
                            <Reveal>
                                <p className={styles.video_text}>{t("HeroVideo.1")}</p>
                            </Reveal>
                        </div>
                    </div>
                    <div className={styles.iframe_wrapp}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BzjhZEeGlio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default HeroVideo