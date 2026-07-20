import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { message } from "antd"

const BASE_URL = "http://localhost:5000"

export const getUsers = createAsyncThunk(
    "get-users",
    async (data) => {
        try {
            const res = await axios.get(`${BASE_URL}/getUsers`)
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
        }
    }
)

export const handleSearch = createAsyncThunk(
    "search-users",
    async (query) => {
        try {
            const response = await axios.get(`${BASE_URL}/search-users`, {
                params: { query }
            })
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("error Searching user", error)
        }
    }
)