import { createSlice } from "@reduxjs/toolkit";
import { getProfile, handleLogin, handleSignup } from "./authThunk.js";

const initialState = {
    user: {},
    isAuthenticate: false,
    loading: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isAuthenticate = false,
                state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleSignup.pending, (state) => {
                state.loading = true
                state.isAuthenticate = null
            })

            .addCase(handleSignup.fulfilled, (state, action) => {
                state.user = action.payload.user
                state.loading = false
                state.isAuthenticate = true
            })

            .addCase(handleSignup.rejected, (state, action) => {
                // state.user = null
                state.isAuthenticate = false
            })

        builder
            .addCase(handleLogin.pending, (state) => {
                state.isAuthenticate = false,
                    state.loading = true
            })

            .addCase(handleLogin.fulfilled, (state, action) => {
                state.isAuthenticate = true,
                    state.loading = false
            })

            .addCase(handleLogin.rejected, (state, action) => {
                state.isAuthenticate = false
            })

        builder
            .addCase(getProfile.pending, (state) => {
                state.isAuthenticate = false
                state.loading = true
            })

            .addCase(getProfile.fulfilled, (state) => {
                state.isAuthenticate = true,
                    state.loading = false
            })

            .addCase(getProfile.rejected, (state) => {
                state.isAuthenticate = false
                state.loading = false
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer