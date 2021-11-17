import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rating, Console, Genre, TextSearchType } from "src/generated/graphql";
import { allRatings } from "../searchParameters/ratings";
import { allGenres } from "../searchParameters/genres";
import { allConsoles } from "../searchParameters/consoles";
import { toggleFromArray } from "src/utils/toggleFromArray";

export interface SearchParamsState {
  title: string;
  textSearchType: TextSearchType;
  ratings: Rating[];
  consoles: Console[];
  genres: Genre[];
  yearRange: [number, number];
  publisher: string;
  developer: string;
  criticScoresRange: [number, number];
  userScoresRange: [number, number];
  globalSales: [number, number];
  NASales: [number, number];
  JPNSales: [number, number];
  EUSales: [number, number];
  otherRegionSales: [number, number];
}

// ! update initial state for sections marked "change later"
const initialState: SearchParamsState = {
  title: "",
  textSearchType: TextSearchType.Contains,
  ratings: allRatings,
  consoles: allConsoles,
  genres: allGenres,
  yearRange: [1980, 1990], // change later
  publisher: "",
  developer: "",
  criticScoresRange: [0, 100],
  userScoresRange: [0, 100],
  globalSales: [0, 100], // change later
  NASales: [0, 100], // change later
  JPNSales: [0, 100], // change later
  EUSales: [0, 100], // change later
  otherRegionSales: [0, 100], // change later
};

export const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    resetState: (_state) => {
      _state = initialState;
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    updateTextSearchType: (state, action: PayloadAction<TextSearchType>) => {
      state.textSearchType = action.payload;
    },
    updateRatings: (state, action: PayloadAction<Rating>) => {
      state.ratings = toggleFromArray(action.payload, state.ratings);
    },
    updatePublisher: (state, action: PayloadAction<string>) => {
      state.publisher = action.payload;
    },
    updateDeveloper: (state, action: PayloadAction<string>) => {
      state.developer = action.payload;
    },
    updateGenres: (state, action: PayloadAction<Genre>) => {
      state.genres = toggleFromArray(action.payload, state.genres);
    },
    updateConsoles: (state, action: PayloadAction<Console>) => {
      state.consoles = toggleFromArray(action.payload, state.consoles);
    },
    updateYearRange: (state, action: PayloadAction<[number, number]>) => {
      state.yearRange = action.payload;
    },
    updateCriticScoresRange: (
      state,
      action: PayloadAction<[number, number]>
    ) => {
      state.criticScoresRange = action.payload;
    },
    updateUserScoresRange: (state, action: PayloadAction<[number, number]>) => {
      state.userScoresRange = action.payload;
    },
    updateGlobalSalesRange: (
      state,
      action: PayloadAction<[number, number]>
    ) => {
      state.globalSales = action.payload;
    },
    updateNASalesRange: (state, action: PayloadAction<[number, number]>) => {
      state.NASales = action.payload;
    },
    updateJPNSalesRange: (state, action: PayloadAction<[number, number]>) => {
      state.JPNSales = action.payload;
    },
    updateEUSalesRange: (state, action: PayloadAction<[number, number]>) => {
      state.EUSales = action.payload;
    },
    updateOtherRegionSalesRange: (
      state,
      action: PayloadAction<[number, number]>
    ) => {
      state.otherRegionSales = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  resetState,
  updateTitle,
  updateTextSearchType,
  updateRatings,
  updatePublisher,
  updateDeveloper,
  updateGenres,
  updateConsoles,
  updateYearRange,
  updateCriticScoresRange,
  updateUserScoresRange,
  updateGlobalSalesRange,
  updateNASalesRange,
  updateJPNSalesRange,
  updateEUSalesRange,
  updateOtherRegionSalesRange,
} = searchParamsSlice.actions;

export const searchParamsReducer = searchParamsSlice.reducer;
