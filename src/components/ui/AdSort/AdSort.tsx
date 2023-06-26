import React from "react";
import Categories from "../../common/Categories";
import { useSelector } from "react-redux";
import { filtersSortSelector } from "../../../redux/filters/selectors";
import { useAppDispatch } from "../../../redux/store";
import { setSort } from "../../../redux/filters/slice";

const AdSort: React.FC = () => {
    const dispatch = useAppDispatch();
    const sortList = [
        { id: 1, value: "rating", name: "по популярности" },
        { id: 2, value: "name", name: "по алфавиту" },
        { id: 3, value: "price", name: "по цене" },
    ];

    const sort = useSelector(filtersSortSelector);

    const handleChangeSort = (value: string) => {
        dispatch(
            setSort({ value, order: sort.order === "desc" ? "asc" : "desc" })
        );
    };

    return (
        <Categories
            options={sortList}
            activeValue={sort.value}
            onClickActiveId={handleChangeSort}
        />
    );
};

export default AdSort;
