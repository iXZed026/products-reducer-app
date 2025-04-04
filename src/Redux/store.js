import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./store/Product";
import addToCartReducer from "./store/Cart";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: addToCartReducer,
    }
})