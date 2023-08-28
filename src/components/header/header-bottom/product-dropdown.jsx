import React from 'react'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css'
const ProductDropdown = ({fonstSizes}) => {
    const { t } = useTranslation()
    const items = [
        {
            label: <NavLink to="/category">Апарат</NavLink>,
            key: '0',
        },
        {
            label: <NavLink to="/category-pereparat">Препараты</NavLink>,
            key: '1',
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
                            <span style={{fontSize: fonstSizes}}>{t("Header.1")}</span>
                        </div>
                    </Space>
                </a>
            </Dropdown>
        </>
    )
}

export default ProductDropdown