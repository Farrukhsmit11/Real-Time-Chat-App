import { createSlice } from "@reduxjs/toolkit";
import { getProfile, handleLogin, handleSignup, handleForgotPassword, handleChangePassword, handleVerifyOtp, handleResendOtp } from "./authThunk.js";

const initialState = {
    user: {},
    isAuthenticate: false,
    loginLoading: false,
    signUpLoading: false,
    forgotPasswordLoading: false,
    changePasswordLoading: false,
    verifyOtpLoading: false,
    resendOtpLoading: false,
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

            .addCase(handleLogin.pending, (state) => {
                state.isAuthenticate = false
                state.loginLoading = true
            })

            .addCase(handleLogin.fulfilled, (state, action) => {
                state.isAuthenticate = true
                state.loginLoading = false
            })

            .addCase(handleLogin.rejected, (state, action) => {
                state.loginLoading = false
                state.isAuthenticate = false
                state.error = action.payload
            })

            .addCase(getProfile.pending, (state) => {
                state.loading = true
            })

            .addCase(getProfile.fulfilled, (state, action) => {
                state.loading = false
                state.isAuthenticate = true
                state.user = action.payload
            })

            .addCase(getProfile.rejected, (state) => {
                state.isAuthenticate = false
                state.loading = false
                state.user = null
            })

        builder
            .addCase(handleForgotPassword.pending, (state) => {
                state.forgotPasswordLoading = true
            })

            .addCase(handleForgotPassword.fulfilled, (state) => {
                state.forgotPasswordLoading = false
            })

            .addCase(handleForgotPassword.rejected, (state) => {
                state.forgotPasswordLoading = false
            })

        builder
            .addCase(handleChangePassword.pending, (state) => {
                state.changePasswordLoading = true
            })

            .addCase(handleChangePassword.fulfilled, (state) => {
                state.changePasswordLoading = false
            })

            .addCase(handleChangePassword.rejected, (state) => {
                state.changePasswordLoading = false
            })

        builder
            .addCase(handleVerifyOtp.pending, (state) => {
                state.verifyOtpLoading = true
            })

            .addCase(handleVerifyOtp.fulfilled, (state) => {
                state.verifyOtpLoading = false
            })

            .addCase(handleVerifyOtp.rejected, (state) => {
                state.verifyOtpLoading = false
            })

        builder
            .addCase(handleResendOtp.pending, (state) => {
                state.resendOtpLoading = false
            })

            .addCase(handleResendOtp.fulfilled, (state) => {
                state.resendOtpLoading = false
            })

            .addCase(handleResendOtp.rejected, (state) => {
                state.resendOtpLoading = false
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer