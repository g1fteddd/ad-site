import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilters, IPaginate, ISort } from "./types";

const initialState: IFilters = {
    categoryId: 0,
    priceFrom: null,
    priceTo: null,
    sort: {
        value: "rating",
        order: "desc",
    },
    paginate: {
        page: 1,
        limit: 3,
    },
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setPriceFrom: (state, action: PayloadAction<number>) => {
            state.priceFrom = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setPriceTo: (state, action: PayloadAction<number>) => {
            state.priceTo = action.payload;
            state.paginate = { ...initialState.paginate };
        },
        setSort: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload;
        },
        setPaginate: (state, action: PayloadAction<IPaginate>) => {
            state.paginate = action.payload;
        },
        resetPaginate: (state) => {
            state.paginate = {
                page: 1,
                limit: 3,
            };
        },
    },
});

export const {
    setCategoryId,
    setPriceFrom,
    setPriceTo,
    setSort,
    setPaginate,
    resetPaginate,
} = filtersSlice.actions;

export default filtersSlice.reducer;
