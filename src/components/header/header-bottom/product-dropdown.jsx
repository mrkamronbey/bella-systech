import React from 'react'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DownOutlined } from '@ant-design/icons';
import './style.css'
const ProductDropdown = ({ fonstSizes, onClose }) => {
    const { t } = useTranslation()
    const items = [
        {
            label: <NavLink onClick={onClose} to="/category">{t("Header.7")}</NavLink>,
            key: '0',
        },
        {
            label: <NavLink onClick={onClose} to="/category-pereparat">{t("Header.8")}</NavLink>,
            key: '1',
        },
        {
            label: <NavLink onClick={onClose} to="/cosmetic-cateogry">{t("Header.9")}</NavLink>,
            key: '2',
        }
    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['hover']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className="header_btm_drop">
                            <span style={{ fontSize: fonstSizes }}>{t("Header.1")}</span>
                        </div>
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default ProductDropdown