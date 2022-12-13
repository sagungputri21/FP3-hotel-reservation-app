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
        { params: { domain: 'ID', locale: 'en_GB', query: 'Bali'}});
      return res.data.data;
    } catch (err) {
      console.log("error ==> ", err);
    }
  }
);

const citySlice = createSlice({
  name: "cities",
  initialState,
  extraReducers: {
    [getCities.pending]: (state) => {
      state.loading = true;
    },
    [getCities.fulfilled]: (state, {payload}) => {
      state.cities = payload;
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
