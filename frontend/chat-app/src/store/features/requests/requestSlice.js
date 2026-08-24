import { createSlice } from "@reduxjs/toolkit";
import { handleApprove, handleRequests, sendRequest } from "./requestThunk";

const initialState = {
    requests: [],
    loading: false,
    status: "pending",
    error: null
}

const requestSlice = createSlice({
    initialState,
    name: "request",
    extraReducers: (builder) => {
        builder
            .addCase(sendRequest.pending, (state) => {
                state.loading = true
            })

            .addCase(sendRequest.fulfilled, (state, action) => {
                state.loading = false
            })

            .addCase(sendRequest.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload

            })

        builder
            .addCase(handleRequests.pending, (state) => {
                state.loading = true
            })

            .addCase(handleRequests.fulfilled, (state, action) => {
                state.requests = action.payload
                state.loading = false
            })

            .addCase(handleRequests.rejected, (state) => {
                state.loading = false
            })

        builder
            .addCase(handleApprove.pending, (state) => {
                state.loading = true
            })

            .addCase(handleApprove.fulfilled, (state) => {
                state.loading = false
            })

            .addCase(handleApprove.rejected, (state) => {
                state.loading = false
            })
    }
})

export default requestSlice.reducer