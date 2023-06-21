import React from "react";
import styles from "./Categories.module.scss";
const Categories: React.FC = () => {
    return (
        <div>
            <ul className={styles["categories"]}>
                <li className={styles["active"]}>Любая</li>
                <li>Механика</li>
                <li>Автомат</li>
            </ul>
        </div>
    );
};

export default Categories;
