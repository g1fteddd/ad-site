import React from "react";
import styles from "./SelectField.module.scss";

// interface IOption {
//     value: string;
//     label: string;
// }

// interface ISelectFieldProps {
//     options: IOption[];
// }

const SelectField: React.FC = () => {
    return (
        <div>
            <p className={styles["label"]}>Тип товара</p>
            <select className={styles["select"]}>
                <option className={styles["option"]} value="all">
                    Все
                </option>
                <option value="property">Недвижимость</option>
                <option value="cars">Автомобили</option>
                <option value="cameras">Фотоаппараты</option>
            </select>
        </div>
    );
};

export default SelectField;
