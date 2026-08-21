import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, post } from "../../../utils/apiMethod"


export const handleRequests = createAsyncThunk(
    "friends/getRequests",
    async (receiverId, { rejectWithValue }) => {
        try {
            const res = await get("/getRequests")
            return res.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message || "Failed to fetch requests")
        }
    }
)


export const sendFriendRequest = createAsyncThunk(
    "friends/sendRequest",
    async ({ receiverId }) => {
        try {
            const data = await post("/sendFriendRequest", {
                receiverId
            })
            return data.data
        } catch (error) {
            console.error("Error While Sending Request", error)
        }
    }
)