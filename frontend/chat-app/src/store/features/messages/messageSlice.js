import { createSlice } from "@reduxjs/toolkit";
import { handleMessages, handleSendMessage } from "./messageThunk";

const initialState = {
    messages: [],
    loading: false,
}

const messageSlice = createSlice({
    name: "messages",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(handleMessages.pending, (state) => {
                state.loading = true
            })

            .addCase(handleMessages.fulfilled, (state, action) => {
                state.loading = false,
                    state.messages = action.payload
            })

            .addCase(handleMessages.rejected, (state) => {
                state.loading = false
            })

        builder
            .addCase(handleSendMessage.pending, (state) => {
                state.loading = true
            })

            .addCase(handleSendMessage.fulfilled, (state, action) => {
                state.loading = false,
                state.messages = action.payload
            })

            .addCase(handleSendMessage.rejected, (state) => {
                
            })
    }
})

export default messageSlice.reducer