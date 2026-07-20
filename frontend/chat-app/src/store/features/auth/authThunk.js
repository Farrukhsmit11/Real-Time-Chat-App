import axios from "axios"
import { message } from "antd"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"

const BASE_URL = "http://localhost:5000"


export const handleSignup = createAsyncThunk(
    "auth/signup",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/registerUser`, credentials)
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
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, data)
            console.log(data)

        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("error loggineg i", error)
        }
    }
)


export const handleLogout = createAsyncThunk(
    "logout-user",
    async (navigate) => {
        try {
            const data = await axios.post(`${BASE_URL}/logoutUser`)
        } catch (error) {
            console.error("Error logout user")
        }
    }
)