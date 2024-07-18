import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityQuery: ''
};

const searchCity = createSlice({
    name: "cityQuery",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.cityQuery = action.payload;
        },
        clearCity: (state, action) => {
            state.cityQuery = '';
        },
    },
});

export const { setCity, clearCity } = searchCity.actions;

export default searchCity.reducer;