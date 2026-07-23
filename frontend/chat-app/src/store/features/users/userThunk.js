import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { message } from "antd"
import { get } from "../../../utils/apiMethod"


export const getUsers = createAsyncThunk(
    "get-users",
    async (data) => {
        try {
            const res = get("/getUsers")
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
            const response = get("/search-users", {
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