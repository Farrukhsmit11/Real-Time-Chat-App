import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./userThunk"

const initialState = {
    users: [],
    selectedUser: null,
    loading: false,
}

const userSlice = createSlice({
    name: "users",
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

            .addCase(getUsers.rejected, (state) => {
                state.loading = false
                state.users = null
            })
    }
})

export default userSlice.reducer