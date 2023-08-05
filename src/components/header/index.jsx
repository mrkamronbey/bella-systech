import React, { useEffect } from 'react'
import HeaderTop from './header-top'
import HeaderBottom from './header-bottom'
import { WrapperContainer } from '../../style-app'
import styles from './style.module.css'
import './style.css'


const Header = () => {
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector(".header");
        const scrollTop = window.scrollY;
        scrollTop >= 60
            ? header.classList.add("is_sticky")
            : header.classList.remove("is_sticky");
    };

    return (
        <>
            <div className="header">
                <WrapperContainer>
                    <HeaderTop />
                    <div className="hr"></div>
                    <HeaderBottom />
                </WrapperContainer>
            </div>
        </>
    )
}

export default Header