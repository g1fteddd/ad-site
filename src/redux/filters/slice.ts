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
        },
        setPriceFrom: (state, action: PayloadAction<number>) => {
            state.priceFrom = action.payload;
        },
        setPriceTo: (state, action: PayloadAction<number>) => {
            state.priceTo = action.payload;
        },
        setSort: (state, action: PayloadAction<ISort>) => {
            state.sort = action.payload;
        },
        setPaginate: (state, action: PayloadAction<IPaginate>) => {
            state.paginate = action.payload;
        },
    },
});

export const { setCategoryId, setPriceFrom, setPriceTo, setSort, setPaginate } =
    filtersSlice.actions;

export default filtersSlice.reducer;
