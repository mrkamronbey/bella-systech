import React, { useState } from 'react'
import styles from './style.module.css'
import { Col, Row } from 'react-grid-system'
import LanguageHeader from '../header-language'
import { Tooltip } from 'antd';
import Menu from '../menu';
import { Button } from 'antd';

import HeaderLogo from '../../../assets/header/bella-systech-hdr-logo.png'
import { NavLink } from 'react-router-dom';


const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={styles.header_top_wrapp}>
        <Row className={styles.header_top_row}>
          <Col className={styles.header_top_col} lg={5}>
            <NavLink to='/'><img src={HeaderLogo} alt="" /></NavLink>
          </Col>
          <Col className={styles.header_top_col} lg={7}>
            <div className={styles.header_top_link_wrapp}>
              <ul className={styles.header_top_list}>
                <li>
                  <a className={styles.mobile_none} href="tel:+998 93 908 70 85">
                    <i class='bx bx-phone-call'></i>
                    <span>+998 93 908 70 85</span>
                  </a>
                </li>
                <li>
                  <a className={styles.mobile_none} href="mailto:info@bella-systech.uz">
                    <i class='bx bx-envelope'></i>
                    <span>info@bella-systech.uz</span>
                  </a>
                  <div className={styles.tool_none}>
                    <Tooltip title="+998 93 908 70 85">
                      <a className={styles.tool_link} href="tel:+998 93 908 70 85">
                        <i class='bx bx-phone-call'></i>
                      </a>
                    </Tooltip>
                  </div>
                  <div className={styles.tool_none}>
                    <Tooltip className={styles.tool_link} title="info@bella-systech.uz">
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
                <li className={styles.lang_wrapp}> <LanguageHeader /></li>
              </ul>
            </div>
            <button className={styles.drawers_btn} onClick={showDefaultDrawer}>
              <i class='bx bx-menu-alt-right' ></i>
            </button>
          </Col>
        </Row>
      </div>
      <div className={styles.mobile_box}>
        <Row className={styles.header_top_row}>
          <Col className={styles.mobile_btm_col}  >
            <NavLink to='/'><img src={HeaderLogo} alt="" />
              <img className={styles.desktop_block_img} src={HeaderLogo} alt="" />
              <h1 className={styles.mobile_block_title}>Bella-Systech</h1>
            </NavLink>
          </Col>
          <Col className={styles.mobile_btm_col}>
            <button className={styles.drawers_btn} onClick={showDefaultDrawer}>
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