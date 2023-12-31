import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'
import './style.css'
import Reveal from '../../../utils/reveal/reveal'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { WrapperContainer } from '../../../style-app'


const HeroVideo = () => {
    const { t } = useTranslation()
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <>
            <motion.div
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
                <WrapperContainer>
                    <div className={styles.mobile_video_wrapp}>
                        <div className={styles.mobile_video_content}>
                            <div>
                                <Reveal>
                                    <h4 className={styles.mobile_video_title}>{t("HeroVideo.0")}</h4>
                                </Reveal>
                                <Reveal>
                                    <p className={styles.mobile_video_text}>{t("HeroVideo.1")}</p>
                                </Reveal>
                            </div>
                            <div className={styles.mobile_iframe_wrapp}>
                                <iframe width="100%" height="250px"  src="https://www.youtube.com/embed/BzjhZEeGlio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>

                        </div>
                    </div>
                </WrapperContainer>
            </motion.div>
        </>
    )
}

export default HeroVideo