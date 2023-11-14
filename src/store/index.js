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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedBooks: [],
  }, 
  reducers: {
    addBookToCart: (state, action) => {
      state.selectedBooks.push(action.payload)
    }
  }
})


// const store = configureStore({
//   reducer: {login: loginSlice.reducer}
// })
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    cart: cartSlice.reducer
  }
})
// In case that I have only one reducer so I do not need a map or reducers

// Here I am exploring the actions, I do have only one actions which is the loginToggler that will work as a switch

export const loginActions = loginSlice.actions
export const { addBookToCart } = cartSlice.actions;
export const selectCart = (state) => state.cart
export default store