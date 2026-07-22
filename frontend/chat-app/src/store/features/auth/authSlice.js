import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, handleSignup } from "./authThunk";

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
            state.user = null,
                state.isAuthenticate = false,
                state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleSignup.pending, (state) => {
                state.loading = true
                state.user = null,
                    state.isAuthenticate = null
            })

            .addCase(handleSignup.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload?.user,
                    state.isAuthenticate = true
            })

            .addCase(handleSignup.rejected, (state, action) => {
                state.user = null
                state.isAuthenticate = false
            })

        builder
            .addCase(handleLogin.pending, (state) => {
                state.user = null
                state.isAuthenticate = false,
                    state.loading = true
            })

            .addCase(handleLogin.fulfilled, (state, action) => {
                state.user = action.payload.user,
                    state.isAuthenticate = true,
                    state.loading = false
            })

            .addCase(handleLogin.rejected, (state, action) => {
                state.user = null,
                    state.isAuthenticate = false
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer