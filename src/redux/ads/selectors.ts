import { RootState } from "../store";

export const adsSelector = (state: RootState) => state.ads;

export const adsAllLengthSelector = (state: RootState) => state.ads.length;
