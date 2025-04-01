import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./store/Product";

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})