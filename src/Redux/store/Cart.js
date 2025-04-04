import { createSlice } from "@reduxjs/toolkit";

import { current } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            return [...state, action.payload]
        },
        removeProductCart : (state,action)=>{
            // const findProduct = state.find(product=> product.id === action.payload)
            // return findProduct
            const newProduct = current(state).filter(product => product.id !== action.payload)
            return newProduct
        }
    }
})


export const { addToCart ,removeProductCart} = slice.actions;
export default slice.reducer;