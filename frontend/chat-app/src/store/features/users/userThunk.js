import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { message } from "antd"
import { get } from "../../../utils/apiMethod"


export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (data, { rejectWithValue }) => {
        try {
            const res = await get("/getUsers")
            console.log(res.data);
            return res.data.res
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message
            )
        }
    }
)

export const handleSearch = createAsyncThunk(
    "search-users",
    async (query, { rejectWithValue }) => {
        try {
            const response = await get("/search-users", {
                params: { query }
            })
        } catch (error) {
            return rejectWithValue(
                message.error(error.response?.data?.message)
            )
            console.error("error Searching user", error)
        }
    }
)