import React from "react";
import styles from "./AdList.module.scss";
import AdItem from "../AdItem";

const AdList: React.FC = () => {
    return (
        <ul className={styles["ad-list"]}>
            <li>
                <AdItem />
            </li>
            <li>
                <AdItem />
            </li>
            <li>
                <AdItem />
            </li>
            <li>
                <AdItem />
            </li>
            <li>
                <AdItem />
            </li>
        </ul>
    );
};

export default AdList;
