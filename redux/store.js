import { configureStore } from "@reduxjs/toolkit";
import city from './slices/citySlice';
import weatherReducer from './slices/weatherSlice';

const store = configureStore({
    reducer: {
        data: city,
        weather: weatherReducer,
    },
});

export default store;