import axios from "axios"
import { message } from "antd"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:5000"

export const handleSignup = createAsyncThunk(
    "auth/signup",
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/registerUser`, credentials )
        } catch (error) {
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
            console.error("error loggineg i", error)
        }
    }
)