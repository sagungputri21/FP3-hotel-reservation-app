import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "../features/city/citySlice";
import destinationReducer from "../features/city/destinationSlice";
import cityReducer from "../features/search/cityIdSlice";
import searchReducer from "../features/search/searchSlice";

const store =  configureStore({
    reducer: {
        cities: citiesReducer,
        destination: destinationReducer,
        city: cityReducer,
        hotels: searchReducer
    },
});

export default store;