import { createSlice } from "@reduxjs/toolkit";
import { handleFriends, handleSearchFriends } from "./friendsThunk";

const initialState = {
    friends: [],
    loading: false,
    error: null
}

const friendSlice = createSlice({
    name: "friends",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(handleFriends.pending, (state) => {
                state.loading = true
            })

            .addCase(handleFriends.fulfilled, (state, action) => {
                state.loading = false,
                    state.friends = action.payload
            })

            .addCase(handleFriends.rejected, (state, action) => {
                state.error = action.payload
            })

        builder
            .addCase(handleSearchFriends.pending, (state) => {
                state.loading = true
            })

            .addCase(handleSearchFriends.fulfilled, (state) => {
                state.loading = false
            })

            .addCase(handleSearchFriends.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export default friendSlice.reducer