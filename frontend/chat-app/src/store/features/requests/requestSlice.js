import { createSlice } from "@reduxjs/toolkit";
import { handleRequests, sendFriendRequest } from "./requestThunk";

const initialState = {
    requests: [],
    loading: false,
    status: "pending"
}

const requestSlice = createSlice({
    initialState,
    name: "request",
    extraReducers: (builder) => {
        builder
            .addCase(sendFriendRequest.pending, (state) => {
                state.loading = true
            })

            .addCase(sendFriendRequest.fulfilled, (state, action) => {
                state.requests = action.payload
                state.loading = false
            })

            .addCase(sendFriendRequest.rejected, (state) => {
                state.loading = false
            })

        builder
            .addCase(handleRequests.pending, () => {
                state.loading = true
            })

            .addCase(handleRequests.fulfilled, (action) => {
                state.requests = action.payload
            })


    }
})

export default requestSlice.reducer