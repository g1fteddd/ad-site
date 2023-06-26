import React, { useEffect } from "react";
import SelectField from "../../common/SelectField";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import {
    categoriesSelector,
    getCategoriesById,
} from "../../../redux/categories/selectors";
import { getCategories } from "../../../redux/categories/asyncActions";
import { filtersCategoryIdSelector } from "../../../redux/filters/selectors";
import { setCategoryId } from "../../../redux/filters/slice";

const AdCategories: React.FC = () => {
    const dispatch = useAppDispatch();
    const { categories } = useSelector(categoriesSelector);
    const categoryId = useSelector(filtersCategoryIdSelector);

    const selectedCategory = useSelector(getCategoriesById(categoryId));

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedCategory = categories.find(
            (obj) => obj.value === e.target.value
        );
        if (newSelectedCategory) {
            dispatch(setCategoryId(newSelectedCategory.id));
        }
    };

    return (
        <>
            {selectedCategory && (
                <SelectField
                    value={selectedCategory.value}
                    onChange={handleChange}
                    options={categories}
                    label="Категория товаров"
                />
            )}
        </>
    );
};

export default AdCategories;
