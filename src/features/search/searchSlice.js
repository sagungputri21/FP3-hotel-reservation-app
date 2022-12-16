import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/baseApi";

const initialState = {
  search: [],
  loading: false
};

export const getHotels = createAsyncThunk(
  "hotels/getHotels",
  async (cityId, guests, checkin, checkout) => {
    try {
      const res = await client.get(`/hotels/search`, 
        { params: { 
            domain: 'ID', 
            locale: 'en_GB', 
            region_id: `${cityId}`,
            adults_number: `${guests}`,
            checkin_date: `${checkin}`,
            checkout_date: `${checkout}`,
            sort_order: 'RECOMMENDED'
        }});
      return res.data.data;
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

export const cityActions = searchSlice.actions;
export default searchSlice.reducer;
