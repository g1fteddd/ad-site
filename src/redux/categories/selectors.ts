import { RootState } from "../store";

export const categoriesSelector = (state: RootState) => state.categories;
export const getCategoriesById = (id: number) => (state: RootState) =>
    state.categories.categories.find((obj) => obj.id === id);
