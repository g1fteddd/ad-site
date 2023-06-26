import React from "react";
import styles from "./Pagination.module.scss";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import {
    adsAllLengthSelector,
    adsSelector,
} from "../../../redux/ads/selectors";
import range from "lodash.range";
import { filtersPaginateSelector } from "../../../redux/filters/selectors";
import { setPaginate } from "../../../redux/filters/slice";

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    const { page, limit } = useSelector(filtersPaginateSelector);
    const adsAllLength = useSelector(adsAllLengthSelector);
    const pageCount = Math.ceil(adsAllLength / limit);

    const pages = range(1, pageCount + 1);

    const handleClick = (newPage: number) => {
        dispatch(setPaginate({ page: newPage, limit: 3 }));
    };
    if (pageCount === 1) {
        return <></>;
    }
    return (
        <ul className={styles["pagination"]}>
            {pages.map((item) => (
                <li
                    key={item}
                    className={item === page ? styles["active"] : ""}
                    onClick={() => handleClick(item)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default Pagination;
