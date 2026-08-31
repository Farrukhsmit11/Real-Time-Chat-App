import { createSlice } from "@reduxjs/toolkit";
import { handleFriends } from "./friendsThunk";

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
    }
})

export default friendSlice.reducer