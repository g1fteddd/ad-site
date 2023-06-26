export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export interface ILocation {
    city: string;
    street: string;
}

export interface IItem {
    id: number;
    category: number;
    imageUrl: string;
    name: string;
    price: number;
    location: ILocation;
    dateProduction: number;
}

// export type Item = ICar; // | ICamera | ILaptop

export interface IItems {
    ads: IItem[];
    status: Status;
}
