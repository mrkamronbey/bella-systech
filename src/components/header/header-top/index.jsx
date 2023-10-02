import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
import { Col, Row } from 'react-grid-system'
import LanguageHeader from '../header-language'
import { Tooltip } from 'antd';
import Menu from '../menu';
import './style.css'
import HeaderLogo from '../../../assets/header/logos.png'
import { NavLink } from 'react-router-dom';


const HeaderTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header_top_wrapp");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("is_sticky")
      : header.classList.remove("is_sticky");
  };
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="header_top_wrapp">
        <Row className="header_top_row">
          <Col className="header_top_col" lg={5}>
            <NavLink className='logo_link' to='/'>
              <img src={HeaderLogo} alt="" />
            </NavLink>
          </Col>
          <Col className="header_top_col" lg={7}>
            <div className="header_top_link_wrapp">
              <ul className='header_top_list'>
                <li>
                  <a className="mobile_none" href="tel:+998 90 735 55 44">
                    <i class='bx bx-phone-call'></i>
                    <span>+998 90 735 55 44</span>
                  </a>
                </li>
                <li>
                  <a className="mobile_none" href="mailto:info@bella-systech.uz">
                    <i class='bx bx-envelope'></i>
                    <span>info@bella-systech.uz</span>
                  </a>
                  <div className="tool_none">
                    <Tooltip title="+998 90 735 55 44">
                      <a className="tool_link" href="tel:+998 90 735 55 44">
                        <i class='bx bx-phone-call'></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div className="tool_none">
                    <Tooltip className="tool_link" title="info@bella-systech.uz">
                      <a href="mailto:info@bella-systech.uz">
                        <i class='bx bx-envelope'></i>
                      </a>
                    </Tooltip>
                  </div>
                </li>
                <li>
                  <a href="#"><i class='bx bxl-telegram' ></i></a>
                  <a href="#"><i class='bx bxl-instagram' ></i></a>
                  <a href="#"><i class='bx bxl-facebook'></i></a>
                  <a href="#"><i class='bx bxl-youtube' ></i></a>
                </li>
                <li className="lang_wrapp"> <LanguageHeader /></li>
              </ul>
            </div>
            <button className="drawers_btn" onClick={showDefaultDrawer}>
              <i class='bx bx-menu-alt-right' ></i>
            </button>
          </Col>
        </Row>
      </div>
      <div className="mobile_box">
        <Row className="header_top_row">
          <Col className="mobile_btm_col">
            <NavLink to='/'>
              <img className="desktop_block_img" src={HeaderLogo} alt="" />
              <h1 className="mobile_block_title">Bella-Systech</h1>
            </NavLink>
          </Col>
          <Col className="mobile_btm_col">
            <button className="drawers_btn" onClick={showDefaultDrawer}>
              <i class='bx bx-menu-alt-right' ></i>
            </button>
          </Col>
        </Row>
        <Menu onClose={onClose} open={open} />
      </div>

    </>
  )
}

export default HeaderTop