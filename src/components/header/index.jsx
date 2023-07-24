import React from 'react'
import HeaderTop from './header-top'
import HeaderBottom from './header-bottom'
import { WrapperContainer } from '../../style-app'
import styles from './style.module.css'


const Header = () => {
    
    return (
        <>
            <div className={styles.header}>
                <WrapperContainer>
                    <HeaderTop />
                    <div className={styles.hr}></div>
                    <HeaderBottom />
                </WrapperContainer>
            </div>
        </>
    )
}

export default Header