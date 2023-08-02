import React from 'react'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css'


const HeaderBottom = () => {
  const { t } = useTranslation();
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.antgroup.com">2nd menu item</a>,
      key: '1',
    },
    {
      label: <a href="https://www.antgroup.com">3nd menu item</a>,
      key: '3',
    },
    {
      label: <a href="https://www.antgroup.com">4nd menu item</a>,
      key: '4',
    },
    {
      label: <a href="https://www.antgroup.com">5nd menu item</a>,
      key: '5',
    },
    {
      label: <a href="https://www.antgroup.com">6nd menu item</a>,
      key: '6',
    },
    {
      label: <a href="https://www.antgroup.com">7nd menu item</a>,
      key: '7',
    },

  ];
  return (
    <>
      <div className={styles.header_btm_wrapp}>
        <Row className={styles.header_btm_row}>
          <Col className={styles.header_btm_col} lg={4}>
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <div className={styles.header_btm_drop}>
                    <i class='bx bx-category' ></i>
                    <span>{t("Header.0")}</span>
                  </div>
                </Space>
              </a>
            </Dropdown>
          </Col>
          <Col className={styles.header_btm_col} lg={8}>
            <ul className={styles.header_btm_col_list}>
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
                <NavLink to='#'>{t("Header.5")}</NavLink>
              </li>
              <li>
                <NavLink to='#'>{t("Header.6")}</NavLink>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default HeaderBottom