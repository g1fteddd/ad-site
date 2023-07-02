import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getAds } from "./asyncActions";
import { IItems, Status, IResponseData } from "./types";

const initialState: IItems = {
    ads: [],
    length: 0,
    status: Status.LOADING,
};

const adsSlice = createSlice({
    name: "ads",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getAds.fulfilled,
            (state, action: PayloadAction<IResponseData>) => {
                state.ads = action.payload.data;
                state.length = action.payload.length;
                state.status = Status.SUCCESS;
            }
        );
        builder.addCase(getAds.pending, (state) => {
            state.ads = [];
            state.length = 0;
            state.status = Status.LOADING;
        });
        builder.addCase(getAds.rejected, (state) => {
            state.ads = [];
            state.length = 0;
            state.status = Status.ERROR;
        });
    },
});

export default adsSlice.reducer;
