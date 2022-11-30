import { Modal, Form, theme } from 'antd';
import { useState } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

import styles from './styles.module.scss';

interface ModalWrapperProps {
    visible: boolean;
    children: React.ReactNode;
    onCancel: () => void;
}

const ModalWrapper = ({ visible, children, onCancel }: ModalWrapperProps) => {
    const closableIcon = () => (
        <IoMdCloseCircle
            size={28}
            color="#1b4484"
            style={{ marginTop: 12 }}
            onClick={() => onCancel()}
        />
    );

    return (
        <Modal
            centered
            visible={visible}
            onCancel={onCancel}
            closeIcon={closableIcon()}
            className={styles.modal}
            footer={null}
        >
            <div className={styles.body}>
                {children}
            </div>
        </Modal>
    );
};

export default ModalWrapper;
