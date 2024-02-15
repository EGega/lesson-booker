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
      const { id, title, author, price, image } = action.payload;
      state.selectedBooks.push({
        id,
        title,
        author,
        price,
        image,
        quantity: 1,
        initialPrice: price,
      });
    },
    removeBookFromCart: (state, action) => {
      console.log(action.payload);
      state.selectedBooks = state.selectedBooks.filter(book => book.id !== action.payload)
    },
    increaseThePrice: (state, action) => {
      const index = action.payload;
      const book = state.selectedBooks[index];
      
      // Increase the quantity
      book.quantity += 1;

      // Calculate the new price based on the initial price and updated quantity
      const initialPrice = book.initialPrice || 0; // Make sure initialPrice is set
      const newPrice = initialPrice * book.quantity;
      
      // Update the price
      book.price = newPrice;
    },
    
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
export const { addBookToCart, removeBookFromCart, increaseThePrice } = cartSlice.actions;
export const selectCart = (state) => state.cart
export default store