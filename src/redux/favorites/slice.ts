import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IItem } from "../ads/types";
import { IFavorites } from "./types";

const initialState: IFavorites = {
    favoritesAds: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        setFavorite: (state, action: PayloadAction<IItem>) => {
            state.favoritesAds.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favoritesAds = state.favoritesAds.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { setFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
