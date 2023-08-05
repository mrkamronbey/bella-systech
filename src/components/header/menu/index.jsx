import React from 'react'
import { Drawer, Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './style.css'
import styles from './style.module.css'
import { useTranslation } from 'react-i18next';
import LanguageHeader from '../header-language';
import HeaderLogo from '../../../assets/header/bella-systech-hdr-logo.png'

const Menu = ({ onClose, open }) => {
    const { t } = useTranslation()
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
            <Drawer
                title={
                    <>
                        <div className={styles.drawers_img}>
                            <img src={HeaderLogo} alt="" />
                        </div>
                        <div className={styles.drawers_title}>
                            <h4>Bella-Systech</h4>
                        </div>
                    </>
                }
                placement="right"
                width="100%"
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <button className='drawers_close_btn' onClick={onClose}>
                            <i class='bx bx-x'></i>
                        </button>
                    </Space>
                }
            >
                <ul className={styles.header_btm_col_list}>
                    <li>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    {t("Header.0")}
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <NavLink onClick={onClose} to='/category'>{t("Header.1")}</NavLink>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <NavLink onClick={onClose} to='/about'>{t("Header.2")}</NavLink>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <NavLink onClick={onClose} to='/benefits'>{t("Header.3")}</NavLink>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <NavLink onClick={onClose} to='/join'>{t("Header.4")}</NavLink>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <NavLink onClick={onClose} to='/news'>{t("Header.5")}</NavLink>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <NavLink onClick={onClose} to='/contact'>{t("Header.6")}</NavLink>
                    </li>
                    <div className={styles.menu_hr}></div>
                    <li>
                        <LanguageHeader />
                    </li>
                </ul>
                <ul className={styles.social_media}>
                    <li><a href="#"><i class='bx bxl-telegram' ></i></a></li>
                    <li><a href="#"><i class='bx bxl-instagram' ></i></a></li>
                    <li><a href="#"><i class='bx bxl-facebook'></i></a></li>
                    <li><a href="#"><i class='bx bxl-youtube' ></i></a></li>
                </ul>
            </Drawer>
        </>
    )
}

export default Menu