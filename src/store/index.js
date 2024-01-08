import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {logged: false}

const loginSlice = createSlice({
  name: "logger",
  initialState: initialState,
  reducers: {
    loginToggler(state, action) {
     state.logged = !state.logged
     state.role = action.payload
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