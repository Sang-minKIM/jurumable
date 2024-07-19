import React from "react";
import styled from "@emotion/styled";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

interface ModalProps {
    children: React.ReactNode;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
