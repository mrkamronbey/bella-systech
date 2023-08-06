import React, { useEffect } from 'react'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css'
import './style.css'


const HeaderBottom = () => {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header_btm_wrapp");
    const scrollTop = window.scrollY;
    scrollTop >= 60
      ? header.classList.add("is_sticky")
      : header.classList.remove("is_sticky");
  };
  const { t } = useTranslation();
  const items = [
    {
      label: <NavLink to="/companies/bialob">BNV Biolab</NavLink>,
      key: '0',
    },
    {
      label: <NavLink to="/companies/lutronic">Lutronic</NavLink>,
      key: '1',
    },
    {
      label: <NavLink to="/companies/lasemd">LaseMD</NavLink>,
      key: '3',
    },
    {
      label: <NavLink to="/companies/histolab">Histolab</NavLink>,
      key: '4',
    },
    {
      label: <NavLink to="/companies/classys">Classys</NavLink>,
      key: '5',
    },
    {
      label: <NavLink to="/companies/ultraformer">Ultraformer</NavLink>,
      key: '6',
    },
    {
      label: <NavLink to="/companies/skinwell">Skinwell</NavLink>,
      key: '7',
    },

  ];
  return (
    <>
      <div className='header_btm_wrapp'>
        <Row className="header_btm_row">
          <Col className="header_btm_col" lg={4}>
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className="header_btm_drop">
                    <i class='bx bx-category' ></i>
                    <span>{t("Header.0")}</span>
                  </div>
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col className="header_btm_col" lg={8}>
            <ul className='header_btm_col_list'>
              <li>
                <NavLink to='/category'>{t("Header.1")}</NavLink>
              </li>
              <li>
                <NavLink to='/about'>{t("Header.2")}</NavLink>
              </li>
              <li>
                <NavLink to='/benefits'>{t("Header.3")}</NavLink>
              </li>
              <li>
                <NavLink to='/join'>{t("Header.4")}</NavLink>
              </li>
              <li>
                <NavLink to='/news'>{t("Header.5")}</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>{t("Header.6")}</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HeaderBottom