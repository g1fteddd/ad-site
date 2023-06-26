import React from "react";
import Categories from "../../common/Categories";
import { useSelector } from "react-redux";
import { filtersSortIdSelector } from "../../../redux/filters/selectors";
import { useAppDispatch } from "../../../redux/store";
import { setSortId } from "../../../redux/filters/slice";

const AdSort: React.FC = () => {
    const dispatch = useAppDispatch();
    const sortList = [
        { id: 1, value: "rating", name: "по популярности" },
        { id: 2, value: "name", name: "по алфавиту" },
        { id: 3, value: "price", name: "по цене" },
    ];

    const sortValue = useSelector(filtersSortIdSelector);

    const handleChangeSort = (value: string) => {
        dispatch(setSortId(value));
    };

    return (
        <Categories
            options={sortList}
            activeValue={sortValue}
            onClickActiveId={handleChangeSort}
        />
    );
};

export default AdSort;
