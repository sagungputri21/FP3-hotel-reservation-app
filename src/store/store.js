import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlice";
import detailReducer from "../features/detailSlice";
import pageSlice from "../features/pageSlice";

const store = configureStore({
    reducer:{
        user: userReducer,
        detail: detailReducer,
        page: pageSlice,
    }
})

export default store
