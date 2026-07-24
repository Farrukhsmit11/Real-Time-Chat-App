import { createSlice } from "@reduxjs/toolkit";
import { getProfile, handleLogin, handleLogout, handleSignup } from "./authThunk.js";

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
                state.loading = false
            })

            .addCase(handleSignup.rejected, (state, action) => {
                state.isAuthenticate = false
                state.loading = false
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
                state.loading = true
                state.isAuthenticate = false
            })

            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false
                state.isAuthenticate = true,
                    state.user = action.payload
            })

            .addCase(getProfile.rejected, (state) => {
                state.isAuthenticate = false
                state.loading = false
                state.user = null
            })


        builder
            .addCase(handleLogout.pending, (state) => {
                state.loading = true
            })

            .addCase(handleLogout.fulfilled, (state) => {
                state.loading = false
                state.isAuthenticate = false
            })

            .addCase(handleLogout.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer