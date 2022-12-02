import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/baseApi";

const initialState = {
  cities: [],
  loading: false
};

export const getCities = createAsyncThunk(
  "cities/getCities",
  async () => {
    try {
      const res = await client.get(`/regions`, 
        { params: { locale: 'en_IN', query: 'Indonesia', type: 'CITY' }});
      return res.data;
    } catch (err) {
      console.log("error ==> ", err);
    }
  }
);

const citySlice = createSlice({
  name: "cities",
  initialState,
  //perlu diperbaikin
  extraReducers: {
    [getCities.pending]: (state) => {
      state.loading = true;
    },
    [getCities.fulfilled]: (state, {payload}) => {
      state.products = payload;
      state.loading = false;
    },
    [getCities.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const cityActions = citySlice.actions;
export default citySlice.reducer;
