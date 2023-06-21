import React from "react";
import TextField from "../../common/TextField";
import styles from "./PriceRange.module.scss";

const PriceRange: React.FC = () => {
    return (
        <div className={styles["price-range"]}>
            <p className="label">Цена, ₽</p>
            <div className={styles["wrapper"]}>
                <TextField />
                <TextField />
            </div>
        </div>
    );
};

export default PriceRange;
