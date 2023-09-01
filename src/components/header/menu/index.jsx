import React, { useEffect } from 'react'
import { Drawer, Space, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import './style.css'
import styles from './style.module.css'
import { useTranslation } from 'react-i18next';
import LanguageHeader from '../header-language';
import HeaderLogo from '../../../assets/header/bella-systech-hdr-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { CompanyGet } from '../../../redux/company';
import ProductDropdown from '../header-bottom/product-dropdown';

const Menu = ({ onClose, open }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const companyGetState = useSelector((state) => state.company.CompanyGet?.data)
    useEffect(() => {
        dispatch(CompanyGet())
    }, [])

    const items = [
        {
            label: <NavLink to="/companies/biolab">BNV Biolab</NavLink>,
            key: '0',
        },
        {
            label: <NavLink to="/companies/lutronic">Lutronic</NavLink>,
            key: '1',
        },
        {
            label: <NavLink to="/companies/juvelook">Juvelook or Lenisna</NavLink>,
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
        // {
        //   label: <NavLink to="/companies/ultraformer">Ultraformer</NavLink>,
        //   key: '6',
        // },
        {
            label: <NavLink to="/companies/skinwell">Skinwell</NavLink>,
            key: '6',
        },
    ];
    // companyGetState.map(elem => (
    //     items.push({
    //         key: elem.id,
    //         label: <NavLink to={`/companies/${elem.name}`}>{elem.name}</NavLink>,
    //     })
    // ))
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
                        <ProductDropdown fonstSizes='16px' />
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