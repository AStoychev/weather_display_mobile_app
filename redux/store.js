import { configureStore } from "@reduxjs/toolkit";
import city from './slices/cityQuery';

const store = configureStore({
    reducer: {
        data: city,
    },
});

export default store;