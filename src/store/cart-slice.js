import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    replaceCart(state, action) {},

    addToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find(
        (item) => item.name === newItem.name
      );
      state.totalQuantity++;

      if (!existingItems) {
        state.items.push({
          name: newItem.name,
          image: newItem.image,
          discountPrice: newItem.price - (newItem.price * 10) / 100,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItems.discountPrice += existingItems.discountPrice;
        existingItems.price += existingItems.price;
        existingItems.quantity++;
      }
      // console.log(newItem);
    },

    removeFromCart(state, action) {
      const removedItem = state.items.find(
        (item) => item.name === action.payload
      );
      state.totalQuantity--;

      if (removedItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.name !== removedItem.name
        );
      } else {
        removedItem.quantity--;
        // removedItem.price = removedItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
