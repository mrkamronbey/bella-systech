import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Col, Row } from 'react-grid-system';



const ParametrTable = ({ dataproductfilter }) => {
    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    const columns = [
        {
            title: '',
            dataIndex: 'paramatr',
            key: 'paramatr',
        },
        {
            title: '',
            dataIndex: 'paramatrInfo',
            key: 'paramatrInfo',
        }
    ];
    const data = [];

    dataproductfilter.map(elem => {
        elem.parametr.map(e => (
            data.push({
                key: e.id,
                paramatr: LanguValue() == 'ru' ? e.parametr_ru : LanguValue() == 'uz' ? e.parametr_uz : LanguValue() == 'en' ? e.parametr_en : null,
                paramatrInfo: LanguValue() == 'uz' ? e.information_uz : LanguValue() == 'ru' ? e.information_ru : LanguValue() == 'en' ? e.information_en : null,
            })
        ))
    })
    return (
        <>
            <Table
                pagination={false}
                showHeader={false}
                columns={columns}
                dataSource={data}
                scroll={{
                    x: 1000,
                }}
            />
        </>
    )
};
export default ParametrTable;