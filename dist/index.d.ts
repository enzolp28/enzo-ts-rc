import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}
declare const Modal: ({ isOpen, onClose, title, message }: ModalProps) => React.JSX.Element | null;

export { Modal, ModalProps };
