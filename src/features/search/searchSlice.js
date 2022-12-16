import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/baseApi";

const initialState = {
  search: [],
  loading: false
};

export const getHotels = createAsyncThunk(
  "hotels/getHotels",
  async cityId => {
    try {
      const res = await client.get(`/hotels/search`, 
        { params: { 
            domain: 'ID', 
            locale: 'en_GB', 
            region_id: `${cityId}`,
            adults_number: 1,
            checkin_date: '2022-12-30',
            checkout_date: '2023-01-1',
            sort_order: 'RECOMMENDED'
        }});
      return res.data;
    } catch (err) {
      console.log("error ==> ", err);
    }
  }
);

const searchSlice = createSlice({
  name: "hotels",
  initialState,
  extraReducers: {
    [getHotels.pending]: (state) => {
      state.loading = true;
    },
    [getHotels.fulfilled]: (state, {payload}) => {
      state.search = payload;
      state.loading = false;
    },
    [getHotels.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error.message;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
