import React from "react";
import styles from "./AdItem.module.scss";
import { IItem } from "../../../redux/ads/types";
import { useAppDispatch } from "../../../redux/store";
import { removeFavorite, setFavorite } from "../../../redux/favorites/slice";
import { useSelector } from "react-redux";
import { getFavoriteItemById } from "../../../redux/favorites/selectors";

const AdItem: React.FC<IItem> = (props) => {
    const {
        id,
        category,
        imageUrl,
        name,
        price,
        location,
        dateProduction,
        rating,
    } = props;
    const dispatch = useAppDispatch();

    const favoriteItem = useSelector(getFavoriteItemById(id));

    const handleClickAdd = () => {
        dispatch(
            setFavorite({
                id,
                category,
                imageUrl,
                name,
                price,
                location,
                dateProduction,
                rating,
            })
        );
    };

    const handleClickRemove = () => {
        dispatch(removeFavorite(id));
    };
    return (
        <div className={styles["ad-item"]}>
            <div className={styles["image"]}>
                {favoriteItem ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                        onClick={handleClickRemove}
                    >
                        <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-heart"
                        viewBox="0 0 16 16"
                        onClick={handleClickAdd}
                    >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                )}

                <img src={imageUrl} alt="Картинка" />
            </div>

            <div className={styles["info"]}>
                <h2 className={styles["name"]}>{name}</h2>
                <p className={styles["price"]}>{price} ₽</p>
                <div className={styles["location"]}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <p className={styles["location-name"]}>
                        {location.city}, ул. {location.street}
                    </p>
                </div>
                <p className={styles["date-publication"]}>
                    30 декабря 2019 года
                </p>
            </div>
        </div>
    );
};

export default AdItem;
