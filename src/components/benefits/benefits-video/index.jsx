import React from 'react'
import { WrapperContainer } from '../../../style-app'
import styles from './style.module.css'

const BenefitsVideo = () => {
    return (
        <>
            <div className={styles.benefits_video_section}>
                <WrapperContainer>
                    <div className={styles.video_wrapp}>
                        <iframe width="100%" height="480" src="https://www.youtube.com/embed/FmG3yqLt4bQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </WrapperContainer>
            </div>
        </>
    )
}

export default BenefitsVideo