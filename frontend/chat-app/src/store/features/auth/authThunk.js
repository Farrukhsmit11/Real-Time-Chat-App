import axios from "axios"
import { message } from "antd"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import { TOKEN } from '../../../utils/constant'
import { get, post } from "../../../utils/apiMethod"

export const handleSignup = createAsyncThunk(
    "auth/signup",
    async (credentials, thunkAPI, dispatch) => {
        try {
            const res = await post("/registerUser", credentials)
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
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
        } catch (error) {
            return rejectWithValue(error.response.data)
            console.error("Error Fetching Profile", error)
        }
    }
)


export const handleLogout = createAsyncThunk(
    "auth/logout",
    async (_, rejectWithValue) => {
        try {
            const data = await post("/logoutUser")
            localStorage.removeItem(TOKEN)
        } catch (error) {
            console.error("Error logging out", error)
        }
    }
)