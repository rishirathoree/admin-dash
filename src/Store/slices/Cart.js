import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const productAction = action.payload;
        const existingProductIndex = state.findIndex(item => item.id === productAction.id);
  
        if (existingProductIndex !== -1) {
          state[existingProductIndex] = productAction; // Replace existing product
        } else {
          state.push(productAction); // Add the new product to the cart
        }
      },
    removeItemFromCart: (state,action) => {
        const product = action.payload
        return state.filter(p=>p.id !== product)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer