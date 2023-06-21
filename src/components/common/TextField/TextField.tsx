import React from "react";
import styles from "./TextField.module.scss";

const TextField: React.FC = () => {
    return (
        <input className={styles["input"]} type="text" placeholder="цена, от" />
    );
};

export default TextField;
