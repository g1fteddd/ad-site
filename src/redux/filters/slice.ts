import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFilters } from "./types";

const initialState: IFilters = {
    categoryId: 0,
    priceFrom: null,
    priceTo: null,
    sortValue: "price",
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
        setSortId: (state, action: PayloadAction<string>) => {
            state.sortValue = action.payload;
        },
    },
});

export const { setCategoryId, setPriceFrom, setPriceTo, setSortId } =
    filtersSlice.actions;

export default filtersSlice.reducer;
