export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

// export type CategoryValue = "all" | "cars" | "cameras" | "property" | "laptop";

export interface ICategory {
    id: number;
    name: string;
    value: string;
}

export interface ICategories {
    categories: ICategory[];
    status: Status;
}
