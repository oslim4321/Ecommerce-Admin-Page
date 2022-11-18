import { configureStore } from '@reduxjs/toolkit'
import productReducers from './Product'
import userReducers from './Users'

export const store = configureStore({
    reducer: {
        product: productReducers,
        users: userReducers,
    },
})

export default store