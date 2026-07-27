import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./userThunk"

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })

            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })

            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                
            })
    }
})

export default userSlice.reducer