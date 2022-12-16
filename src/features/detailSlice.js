// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import client from "../api/baseApi";

// const initialState = {
//     detailHotel: [],
//     loading: false
// }

// export const getDetail = createAsyncThunk(
//     "detailHotel/getDetailHotel",
//     async () => {
//         try {
//             const res = await client.get(`/hotels/details`,
//             {params: { domain: 'AE', locale: 'en_GB', hotel_id: '1105156' }})
//             return res.data.data;
//         } catch (err) {
//             console.log("error==>", err)
//         }
//     }
// )

// const detailSlice = createSlice({
//     name: "detailHotel",
//     initialState,
//     extraReducers: {
//         [getDetailHotel.pending]: (state) => {
//             state.loading = true;
//         },
//         [getDetailHotel.fulfilled]: (state, {payload}) => {
//             state.destinations = payload;
//             state.loading = false;
//         },
//         [getDetailHotel.rejected]: (state, action) => {
//             state.loading = true;
//             state.error = action.error.message;
//         },
//     }
// })

// export const detailHotel = detailSlice.actions;
// export default detailSlice.reducer;