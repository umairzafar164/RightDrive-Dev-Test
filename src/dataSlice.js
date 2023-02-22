import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("getData", 
  async()=> {
    const response =await axios.get("https://dummyjson.com/products/");
    return response;
})

const initialState = {
  data : [],
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
