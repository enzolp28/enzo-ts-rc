import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
}
export declare const Modal: ({ isOpen, onClose, title, message }: ModalProps) => React.JSX.Element | null;
