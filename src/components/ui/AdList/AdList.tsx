import React, { useEffect } from "react";
import styles from "./AdList.module.scss";
import AdItem from "../AdItem";
import { useAppDispatch } from "../../../redux/store";
import { adsSelector } from "../../../redux/ads/selectors";
import { useSelector } from "react-redux";
import { getAds } from "../../../redux/ads/asyncActions";
import AdListSkeleton from "./AdListSkeleton";
import { Status } from "../../../redux/ads/types";
import { filtersSelector } from "../../../redux/filters/selectors";
import Pagination from "../Pagination";

const AdList: React.FC = () => {
    const dispatch = useAppDispatch();
    const { ads, status } = useSelector(adsSelector);
    const adsLength = ads.length;
    const { categoryId, priceFrom, priceTo, sort, paginate } =
        useSelector(filtersSelector);

    useEffect(() => {
        const categoryParam = categoryId ? `category=${categoryId}` : "";
        const priceFromParam = priceFrom ? `price_gte=${priceFrom}` : "";
        const priceToParam = priceTo ? `price_lte=${priceTo}` : "";

        const sortValueParam = sort
            ? `_sort=${sort.value}&_order=${sort.order}`
            : "";

        const paginateParam = paginate
            ? `_page=${paginate.page}&_limit=${paginate.limit}`
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
    }, [categoryId, priceFrom, priceTo, sort, paginate]);

    return (
        <>
            <ul className={styles["ad-list"]}>
                {status === Status.LOADING ? (
                    [...new Array(4)].map((_, index) => (
                        <li key={index}>
                            <AdListSkeleton />
                        </li>
                    ))
                ) : (
                    <>
                        {adsLength ? (
                            ads.map((item) => (
                                <li key={item.id}>
                                    <AdItem {...item} />
                                </li>
                            ))
                        ) : (
                            <div className={styles["empty-list"]}>
                                <h2>Ничего не найдено.</h2>
                            </div>
                        )}
                    </>
                )}
            </ul>
            <Pagination />
        </>
    );
};

export default AdList;
