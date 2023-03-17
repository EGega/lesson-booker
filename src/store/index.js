import { createSlice } from "@reduxjs/toolkit";

const initialState = {logged: false}

createSlice({
  name: "logger",
  initialState: initialState,
  reducers: {
    loginToggler(state) {
      !state.logged
    }
  }
})