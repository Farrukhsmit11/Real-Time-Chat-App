import { createAsyncThunk } from "@reduxjs/toolkit"
import { get } from "../../../utils/apiMethod.js"

export const handleFriends = createAsyncThunk(
    "friends/getFriends",
    async (_, { rejectWithValue }) => {
        try {
            const data = await get("/get-friends")
            return data.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const handleSearchFriends = createAsyncThunk(
    "friends/searchFriends",
    async (query, { rejectWithValue }) => {
        try {
            const response = await get(`search-friends?query=${query}`)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)