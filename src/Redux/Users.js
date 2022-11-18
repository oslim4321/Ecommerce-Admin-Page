import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        isFetching: false,
        user: [],
        error: null
    },
    reducers: {
        fetchingUsersStart: (state, action) => {
            state.isFetching = true
        },
        fetchingSuccess: (state, action) => {
            state.isFetching = false
            state.user = action.payload;
        },
        fetchingErr: (state, action) => {
            state.isFetching = false
            state.product = action.payload;
        },
    }
})
export const { fetchingUsersStart, fetchingSuccess, fetchingErr } = UserSlice.actions;
export default UserSlice.reducer;