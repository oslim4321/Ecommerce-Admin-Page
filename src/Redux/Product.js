import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios'
import { UserRequest } from "../Request";

const initialState = {
    loading: false,
    Product: '',
    error: ''
}

// GEnerate pending dullfil
// const token = localStorage.getItem('token')
export const getSingleProductDetails = createAsyncThunk('Product', () => {
    return UserRequest.get('/product')
        .then((response) => response.data)

})

const ProductSlice = createSlice({
    name: 'Product',
    initialState,
    extraReducers: (builder) => {

        builder.addCase(getSingleProductDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getSingleProductDetails.fulfilled, (state, action) => {
            state.loading = false
            state.Product = action.payload
            state.error = ''
        })
        builder.addCase(getSingleProductDetails.rejected, (state, action) => {
            state.loading = false
            state.Product = []
            state.error = action.error.message
        })
    },

})


// export const { deleteProductStart, deleteSuccess, deleteError } = ProductSlice.actions
export default ProductSlice.reducer
