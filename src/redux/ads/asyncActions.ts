import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IItem } from "./types";

interface IGetAds {
    categoryParam: string;
    priceFromParam: string;
    priceToParam: string;
    sortValueParam: string;
    paginateParam: string;
}

export const getAds = createAsyncThunk("ads/getAds", async (props: IGetAds) => {
    const {
        categoryParam,
        priceFromParam,
        priceToParam,
        sortValueParam,
        paginateParam,
    } = props;

    const responseForLength = await axios.get<IItem[]>(
        `https://my-json-server.typicode.com/g1fteddd/data/items?${categoryParam}&${priceFromParam}&${priceToParam}&${sortValueParam}`
    );

    const responseWithParam = await axios.get<IItem[]>(
        `https://my-json-server.typicode.com/g1fteddd/data/items?${categoryParam}&${priceFromParam}&${priceToParam}&${sortValueParam}&${paginateParam}`
    );

    return {
        data: responseWithParam.data,
        length: responseForLength.data.length,
    };
});
