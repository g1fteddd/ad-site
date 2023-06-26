import { ICategory } from "../categories/types";

export interface ISort {
    value: string;
    order: string;
}

export interface IPaginate {
    page: number;
    limit: number;
}

export interface IFilters {
    categoryId: number;
    priceFrom: number | null;
    priceTo: number | null;
    sort: ISort;
    paginate: IPaginate;
}
