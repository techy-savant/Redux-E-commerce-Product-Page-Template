import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 7,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      // return {cartItems: []};
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    // increase: (state, { payload }) => {
    //   const cartItem = state.cartItems.find((item) => item.id === payload.id);
    //   cartItem.amount = cartItem.amount + 1;
    // },
    toggle: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (payload.option === "up") {
        cartItem.amount = cartItem.amount + 1;
      }
      if (payload.option === "down") {
        cartItem.amount > 1
          ? (cartItem.amount = cartItem.amount - 1)
          : (cartItem.amount = cartItem.amount);
      }
    },
    calculateTotal: (state) =>{
      // decrease: (state, { payload }) => {
      //   const cartItem = state.cartItems.find((item) => item.id === payload);
      //   if (cartItem.amount <= 0) return;
      //   cartItem.amount = cartItem.amount - 1;
      // },
      let amount = 0;
      let total  = 0;

      state.cartItems.forEach((item)=>{
        amount += item.amount;
        total += item.amount * item.price;
      })

      state.amount = amount;
      state.total = total;
      
    }

  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, toggle, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
