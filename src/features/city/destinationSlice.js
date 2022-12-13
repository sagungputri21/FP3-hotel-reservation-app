import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/baseApi";

const initialState = {
  destinations: [],
  loading: false
};

export const getDestinations = createAsyncThunk(
  "destination/getDestinations",
  async () => {
    try {
      const res = await client.get(`/regions`, 
        { params: { domain: 'ID', locale: 'en_GB', query: 'Mataram'}});
      return res.data.data;
    } catch (err) {
      console.log("error ==> ", err);
    }
  }
);

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  extraReducers: {
    [getDestinations.pending]: (state) => {
      state.loading = true;
    },
    [getDestinations.fulfilled]: (state, {payload}) => {
      state.destinations = payload;
      state.loading = false;
    },
    [getDestinations.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const destinationActions = destinationSlice.actions;
export default destinationSlice.reducer;
