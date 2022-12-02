import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../features/city/citySlice";

const store =  configureStore({
    reducer: {
        cities: citiesReducer
    },
});

export default store;