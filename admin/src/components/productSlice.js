import { createSlice, nanoid } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, description }) {
        return {
          payload: {
            id: nanoid(),
            name,
            description,
          },
        };
      },
    },
    deleteProduct(state, action) {
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export const selectAllProducts = (state) => state.products;
export default productSlice.reducer;
