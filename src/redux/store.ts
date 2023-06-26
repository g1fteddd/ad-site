import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./ads/slice";
import categoriesReducer from "./categories/slice";
import filtersReducer from "./filters/slice";
import { useDispatch } from "react-redux";
export const store = configureStore({
    reducer: {
        ads: adsReducer,
        categories: categoriesReducer,
        filters: filtersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
