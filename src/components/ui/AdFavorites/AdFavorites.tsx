import React, { useCallback, useEffect, useRef } from "react";
import styles from "./AdFavorites.module.scss";
import AdItem from "../AdItem";
import { useAppDispatch } from "../../../redux/store";
import { adsSelector } from "../../../redux/ads/selectors";
import { useSelector } from "react-redux";
import { getAds } from "../../../redux/ads/asyncActions";
import { Status } from "../../../redux/ads/types";
import { filtersSelector } from "../../../redux/filters/selectors";
import { favoritesSelector } from "../../../redux/favorites/selectors";

const AdFavorites: React.FC = () => {
    const dispatch = useAppDispatch();
    const favoritesAds = useSelector(favoritesSelector);
    const lengthFavorites = favoritesAds.length;

    return (
        <ul className={styles["ad-cart"]}>
            {lengthFavorites ? (
                favoritesAds.map((item) => (
                    <li key={item.id}>
                        <AdItem {...item} />
                    </li>
                ))
            ) : (
                <div className={styles["empty-favorites"]}>
                    <h2>Вы пока что не добавляли объявления в избранное.</h2>
                </div>
            )}
        </ul>
    );
};

export default AdFavorites;
