import React from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
    children: React.ReactNode;
}
const Button: React.FC<IButtonProps> = ({ children }) => {
    return <button className={styles["button"]}>{children}</button>;
};

export default Button;
