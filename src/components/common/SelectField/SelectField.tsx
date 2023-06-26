import React from "react";
import styles from "./SelectField.module.scss";

interface IOption {
    id: number;
    name: string;
    value: string;
}

interface ISelectFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    label: string;
    options: IOption[];
}

const SelectField: React.FC<ISelectFieldProps> = ({
    value,
    onChange,
    options,
    label,
}) => {
    return (
        <div>
            <p className={styles["label"]}>{label}</p>
            <select
                value={value}
                onChange={onChange}
                className={styles["select"]}
            >
                {options.map((option) => (
                    <option key={option.id} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
