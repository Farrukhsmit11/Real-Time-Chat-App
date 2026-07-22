import axios from "axios"
import { message } from "antd"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import { TOKEN } from '../../../utils/constant'
import { get, post } from "../../../utils/apiMethod"

const BASE_URL = "http://localhost:5000"


export const handleSignup = createAsyncThunk(
    "auth/signup",
    async (credentials, thunkAPI, dispatch) => {
        try {
            const res = await post(`${BASE_URL}/registerUser`, credentials)
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
    async (data, { rejectWithValue }) => {

        if (!data.email || !data.password) {
            rejectWithValue("Email and password not match")
        }
        try {
            const response = await post(`${BASE_URL}/login`, data)
            localStorage.setItem(TOKEN, response?.data?.token)
            alert(data?.error || "Something wents wrong !")

        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("error loggineg i", error)
        }
    }
)

export const getProfile = createAsyncThunk(
    "auth/getProfile",
    async (data, { rejectWithValue }) => {

        if (!data.email || !data.password) {
            rejectWithValue("Email and password not match")
        }
        try {
            const response = await axios.post(`${BASE_URL}/login`, data)
            console.log(response)
            localStorage.setItem(TOKEN, response?.data?.token)
            console.log(data)
            alert(data?.error || "Something wents wrong !")

        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
                handleLogout()
            }
            console.error("error loggineg i", error)
        }
    }
)


export const handleLogout = createAsyncThunk(
    "auth/logoutUser",
    async () => {
        try {
            const data = await axios.post(`/logoutUser`)
        } catch (error) {
            console.error("Error logout user")
        }
    }
)