import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/cart/Modal';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
