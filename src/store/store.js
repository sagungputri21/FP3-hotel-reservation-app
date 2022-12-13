import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../features/city/citySlice";
import destinationReducer from "../features/city/destinationSlice"
const store =  configureStore({
    reducer: {
        cities: citiesReducer,
        destination: destinationReducer,
    },
});

export default store;