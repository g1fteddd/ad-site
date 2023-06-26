import React, { useEffect, useRef } from "react";
import styles from "./AdList.module.scss";
import AdItem from "../AdItem";
import { useAppDispatch } from "../../../redux/store";
import { adsSelector } from "../../../redux/ads/selectors";
import { useSelector } from "react-redux";
import { getAds, getAllLengthAds } from "../../../redux/ads/asyncActions";
import AdListSkeleton from "./AdListSkeleton";
import { Status } from "../../../redux/ads/types";
import { filtersSelector } from "../../../redux/filters/selectors";

const AdList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { ads, status } = useSelector(adsSelector);
    const filters = useSelector(filtersSelector);
    const isMounted = useRef(true);

    useEffect(() => {
        if (isMounted.current) {
            dispatch(getAllLengthAds());
            isMounted.current = false;
        }
        const categoryParam = filters.categoryId
            ? `category=${filters.categoryId}`
            : "";
        const priceFromParam = filters.priceFrom
            ? `price_gte=${filters.priceFrom}`
            : "";
        const priceToParam = filters.priceTo
            ? `price_lte=${filters.priceTo}`
            : "";

        const sortValueParam = filters.sort
            ? `_sort=${filters.sort.value}&_order=${filters.sort.order}`
            : "";

        const paginateParam = filters.paginate
            ? `_page=${filters.paginate.page}&_limit=${filters.paginate.limit}`
            : "";

        dispatch(
            getAds({
                categoryParam,
                priceFromParam,
                priceToParam,
                sortValueParam,
                paginateParam,
            })
        );
    }, [filters]);

    return (
        <ul className={styles["ad-list"]}>
            {status === Status.LOADING
                ? [...new Array(4)].map((_, index) => (
                      <li key={index}>
                          <AdListSkeleton />
                      </li>
                  ))
                : ads.map((item) => (
                      <li key={item.id}>
                          <AdItem {...item} />
                      </li>
                  ))}
        </ul>
    );
};

export default AdList;
