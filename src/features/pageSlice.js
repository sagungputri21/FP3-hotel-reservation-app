import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    page: false
}

export const pageSlice = createSlice({
    name:"page",
    initialState,
    reducers:{
        navigate: (state, action) => {
            state.page = action.payload;
        },
    }
})

export const {navigate} = pageSlice.actions;

export const selectPage = (state) => state.page.page;

export default pageSlice.reducer;