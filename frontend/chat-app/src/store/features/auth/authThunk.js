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
            rejectWithValue("Email and password not match")
        }
        try {
            const response = await post("/login", data)
            console.log("Token before save:", response.data.token);
            localStorage.setItem(TOKEN, response?.data?.token)

            console.log("Token after save:", localStorage.getItem(TOKEN));
            console.log(response.data);
            console.log(response.data.token);
            dispatch(getProfile())
            return response.data
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("Login failed", error)
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
    "auth/logoutUser",
    async () => {
        try {
            const data = post(`/logoutUser`)
        } catch (error) {
            console.error("Error logout user")
        }
    }
)