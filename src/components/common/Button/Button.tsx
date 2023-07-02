import React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}
const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className={styles["button"]}>
            {children}
        </button>
    );
};

export default Button;
