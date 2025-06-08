import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// Save to localStorage on cart change
store.subscribe(() => {
  const cart = store.getState().cart;
  localStorage.setItem('cart', JSON.stringify(cart));
});

export default store;
