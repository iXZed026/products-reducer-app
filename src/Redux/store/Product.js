import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProductsServer = createAsyncThunk('products/getProductsServer',
    async (url) => {
        return fetch(url)
            .then(res => res.json())
            .then(data => data)
    }
)

const slice = createSlice({
    name: "products",
    initialState: [],
    extraReducers: (builder) => {
        builder
            .addCase(getProductsServer.fulfilled, (state, action) => {
                return action.payload.slice(0, 60)
            })
            .addCase(getProductsServer.pending, (state, action) => {
                return { loading: true }

            })
    }
})


export default slice.reducer