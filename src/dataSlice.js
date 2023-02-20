import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("getData", 
  async()=> {
    const res =await axios.get("https://dummyjson.com/products/");
    return res;
})

const initialState = {
  count: 0, 
  data : [],
  loading: false
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers:{
    [fetchData.pending] : (state, action) => {
        state.loading = true;
    },
    [fetchData.fulfilled] : (state, action) => {
        state.loading = false;
        state.data = action.payload.data
    },
    [fetchData.rejected] : (state, action) => {
        state.loading = false;
    }
  }
});

export const { increment, decrement } = dataSlice.actions;
export default dataSlice.reducer;
