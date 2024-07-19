import React, { useEffect } from "react";
import styled from "@emotion/styled";

const ToastContainer = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1001;
`;

interface ToastProps {
    message: string;
    duration?: number;
    onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, onClose }) => {
    useEffect(() => {
        if (onClose) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
