import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./asyncActions";
import { Status } from "./types";
import { ICategories, ICategory } from "./types";

const initialState: ICategories = {
    categories: [],
    status: Status.LOADING,
};

const categoriesSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getCategories.fulfilled,
            (state, action: PayloadAction<ICategory[]>) => {
                state.categories = action.payload;
                state.status = Status.SUCCESS;
            }
        );
        builder.addCase(getCategories.pending, (state) => {
            state.categories = [];
            state.status = Status.LOADING;
        });
        builder.addCase(getCategories.rejected, (state) => {
            state.categories = [];
            state.status = Status.ERROR;
        });
    },
});

export default categoriesSlice.reducer;
