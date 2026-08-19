import axios from "axios"
import { message } from "antd"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import { TOKEN } from '../../../utils/constant'
import { get, post } from "../../../utils/apiMethod"

export const handleSignup = createAsyncThunk(
    "auth/signup",
    async (credentials, { rejectWithValue }) => {
        if (!credentials.name || !credentials.email || !credentials.password) {
            return rejectWithValue("Email and password are required")
        }
        try {
            const res = await post("/registerUser", credentials)
            return res.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Signup failed"
            )
            console.error("error Creating User", error)
        }
    }
)

export const handleLogin = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue, dispatch }) => {
        if (!data.email || !data.password) {
            return rejectWithValue("Email and password are required")
        }
        try {
            const response = await post("/login", data)
            localStorage.setItem(TOKEN, response?.data?.token)
            dispatch(getProfile())
            return response.data
        } catch (error) {
            return rejectWithValue(
                message.error(error.response?.data?.message)
            )
        }
    }
)

export const getProfile = createAsyncThunk(
    "auth/getProfile",
    async (data, { rejectWithValue }) => {
        try {
            const profileData = await get("/get-profile")
            return profileData.data
        } catch (error) {
            return rejectWithValue(error.response.data)
            console.error("Error Fetching Profile", error)
        }
    }
)


export const handleLogout = createAsyncThunk(
    "auth/logout",
    async () => {
        try {
            const data = await post("/logoutUser")
            localStorage.removeItem(TOKEN)
        } catch (error) {
            console.error("Error logging out", error)
        }
    }
)

export const handleForgotPassword = createAsyncThunk(
    "auth/forgotpassword",
    async ({ email }, { rejectWithValue }) => {
        try {
            const res = await post("/forgotPassword", {
                email
            })
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Something went wrong")
        }

    }
)

export const handleVerifyOtp = createAsyncThunk(
    "auth/verifyOtp",
    async ({ email, otp }) => {
        try {
            const verifyData = await post("/verifyOtp", {
                email,
                otp
            })
            return verifyData.data
        } catch (error) {
            console.error("Error Verifying Otp")
        }
    }
)

export const handleChangePassword = createAsyncThunk(
    "auth/changePassword",
    async ({ email, newPassword }) => {
        try {
            const password = await post("/resetPassword", {
                email,
                newPassword
            })
            return password.data
        } catch (error) {
            console.error("Error while Updating Password", error)


        }
    }
)