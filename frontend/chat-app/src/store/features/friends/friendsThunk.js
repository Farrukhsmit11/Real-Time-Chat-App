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