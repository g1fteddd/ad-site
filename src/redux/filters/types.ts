import { ICategory } from "../categories/types";

export interface IFilters {
    categoryId: number;
    priceFrom: number | null;
    priceTo: number | null;
    sortValue: string;
}
