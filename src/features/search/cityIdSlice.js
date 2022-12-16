import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/baseApi";

const initialState = {
  cityID: [],
  loading: false
};

export const getCity = createAsyncThunk(
  "city/getCity",
  async (city) => {
    try {
      const res = await client.get(`/regions`, 
        { params: { domain: 'ID', locale: 'en_GB', query: `${city}`}});

      const data = await res.data.data;
      return data[0]?.gaiaId;

    } catch (err) {
      console.log("error ==> ", err);
    }
  }
);

const cityidSlice = createSlice({
  name: "city",
  initialState,
  extraReducers: {
    [getCity.pending]: (state) => {
      state.loading = true;
    },
    [getCity.fulfilled]: (state, {payload}) => {
      state.cityID = payload;
      state.loading = false;
    },
    [getCity.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const cityActions = cityidSlice.actions;
export default cityidSlice.reducer;
