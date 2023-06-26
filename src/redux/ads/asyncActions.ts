import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IItem } from "./types";
import { IFilters } from "../filters/types";

interface IGetAds {
    categoryParam: string;
    priceFromParam: string;
    priceToParam: string;
    sortValueParam: string;
}

export const getAds = createAsyncThunk("ads/getAds", async (props: IGetAds) => {
    const { categoryParam, priceFromParam, priceToParam, sortValueParam } =
        props;

    // const categoryParam = categoryId ? `category=${categoryId}` : "";
    // const priceFromParam = priceFrom ? `price_gte=${priceFrom}` : "";
    // const priceToParam = priceTo ? `price_lte=${priceTo}` : "";
    // TODO: Сделать парамы внутри UseEffecta в AdList
    const res = await axios.get<IItem[]>(
        `https://my-json-server.typicode.com/g1fteddd/data/items?${categoryParam}&${priceFromParam}&${priceToParam}&${sortValueParam}`
    );

    return res.data;
});
