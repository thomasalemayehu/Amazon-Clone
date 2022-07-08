import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const indexOfItem = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newCart = [...state.items];

      if (indexOfItem >= 0) {
        newCart.splice(index, 1);
      }

      state.items = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
