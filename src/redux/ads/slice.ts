import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAds } from "./asyncActions";
import { IItems, IItem, Status } from "./types";

const initialState: IItems = {
    ads: [],
    status: Status.LOADING,
};

const adsSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getAds.fulfilled,
            (state, action: PayloadAction<IItem[]>) => {
                state.ads = action.payload;
                state.status = Status.SUCCESS;
            }
        );
        builder.addCase(getAds.pending, (state) => {
            state.ads = [];
            state.status = Status.LOADING;
        });
        builder.addCase(getAds.rejected, (state) => {
            state.ads = [];
            state.status = Status.ERROR;
        });
    },
});

export default adsSlice.reducer;
