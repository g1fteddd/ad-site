import { RootState } from "../store";

export const favoritesSelector = (state: RootState) =>
    state.favorites.favoritesAds;

export const getFavoriteItemById = (id: number) => (state: RootState) =>
    state.favorites.favoritesAds.find((obj) => obj.id === id);
