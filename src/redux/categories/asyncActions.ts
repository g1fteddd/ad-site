import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory } from "./types";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const res = await axios.get<ICategory[]>(
            "https://my-json-server.typicode.com/g1fteddd/data/categories"
        );

        return res.data;
    }
);
