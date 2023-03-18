import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {logged: false}

const loginSlice = createSlice({
  name: "logger",
  initialState: initialState,
  reducers: {
    loginToggler(state) {
     state.logged = !state.logged
    }
  }
})



// const store = configureStore({
//   reducer: {login: loginSlice.reducer}
// })
const store = configureStore({
  reducer: loginSlice.reducer
})
// In case that I have only one reducer so I do not need a map or reducers

// Here I am exploring the actions, I do have only one actions which is the loginToggler that will work as a switch

export const loginActions = loginSlice.actions
export default store