import { RootState } from "../store";

export const filtersSelector = (state: RootState) => state.filters;

export const filtersCategoryIdSelector = (state: RootState) =>
    state.filters.categoryId;

export const filterPriceSelector = (state: RootState) => {
    const price = {
        priceFrom: state.filters.priceFrom,
        priceTo: state.filters.priceTo,
    };
    return price;
};

export const filtersSortSelector = (state: RootState) => state.filters.sort;

export const filtersPaginateSelector = (state: RootState) =>
    state.filters.paginate;
