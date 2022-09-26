import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../data";

export const productSlice = createSlice({
  name: "products",
  initialState: { value: ProductData },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    updateProduct: (state, action) => {
      state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
      });
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
