import React from "react";
import styles from "./TextField.module.scss";

interface ITextFieldProps {
    value: string | number;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
}

const TextField: React.FC<ITextFieldProps> = ({
    value,
    onChange,
    type,
    placeholder,
}) => {
    return (
        <input
            value={value}
            onChange={onChange}
            className={styles["input"]}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default TextField;
