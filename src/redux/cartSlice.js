import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let exitItem = state.find((item) => item.id === action.payload.id);
      if (exitItem) {
        // Update the quantity of the existing item
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add the new item to the cart
        state.push({ ...action.payload, qty: 1 });
      }
    },
    RemoveItem: (state, action) => {
      // Remove the item with the matching id
      return state.filter((item) => item.id !== action.payload);
    },
    IncrementQty: (state, action) => {
      // Increment the quantity of the item with the matching id
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    DecrementQty: (state, action) => {
      // Decrement the quantity of the item with the matching id, but not below 1
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      );
    },
  },
});

export const { AddItem, RemoveItem, IncrementQty, DecrementQty } = cartSlice.actions;
export default cartSlice.reducer;