import React from 'react'
import { Modal } from 'antd';

const ModalCommon = ({
    children,
    isModalOpen,
    handleOk,
    handleCancel,
    width,
    title
}) => {
    return (
        <>
            <Modal title={title} footer={false} width={width} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    )
}

export default ModalCommon