import React from 'react'
import { Modal } from 'antd';

const ModalCommon = ({
    children,
    className,
    isModalOpen,
    handleOk,
    handleCancel,
    width,
    title,
    style
}) => {
    return (
        <>
            <Modal title={title} className={className} style={style} footer={false} width={width} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    )
}

export default ModalCommon