import React from "react";
import styles from "./Categories.module.scss";

interface IOption {
    id: number;
    value: string;
    name: string;
}

interface ICategories {
    options: IOption[];
    activeValue: string;
    onClickActiveId: (value: string) => void;
}

const Categories: React.FC<ICategories> = ({
    options,
    activeValue,
    onClickActiveId,
}) => {
    return (
        <ul className={styles["categories"]}>
            {options.map((option) => (
                <li
                    key={option.id}
                    value={option.value}
                    className={
                        activeValue === option.value ? styles["active"] : ""
                    }
                    onClick={() => onClickActiveId(option.value)}
                >
                    {option.name}
                </li>
            ))}
        </ul>
    );
};

export default Categories;
