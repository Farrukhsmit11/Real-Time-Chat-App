import { createSlice } from "@reduxjs/toolkit";
import { getProfile, handleLogin, handleLogout, handleSignup } from "./authThunk.js";

const initialState = {
    user: {},
    isAuthenticate: false,
    loginLoading: false,
    signUpLoading: false,
    error: null
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
                state.signUpLoading = true
                state.isAuthenticate = false
            })

            .addCase(handleSignup.fulfilled, (state, action) => {
                state.signUpLoading = false
            })

            .addCase(handleSignup.rejected, (state, action) => {
                state.signUpLoading = false
            })

        builder
            .addCase(handleLogin.pending, (state) => {
                state.isAuthenticate = false,
                    state.loginLoading = true
            })

            .addCase(handleLogin.fulfilled, (state, action) => {
                state.isAuthenticate = true,
                    state.loginLoading = false
            })

            .addCase(handleLogin.rejected, (state, action) => {
                state.loginLoading = false
                state.isAuthenticate = false
                state.error = action.payload
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