import { createAsyncThunk } from "@reduxjs/toolkit"
import { get, post } from "../../../utils/apiMethod"


export const handleRequests = createAsyncThunk(
    "friends/getRequests",
    async (_, { rejectWithValue }) => {
        try {
            const res = await get("/getRequests")
            return res.data.data
        } catch (error) {
            return rejectWithValue(error.response.data.message || "Failed to fetch requests")
        }
    }
)


export const sendRequest = createAsyncThunk(
    "friends/sendRequest",
    async ({ receiverId }, { rejectWithValue }) => {
        try {
            const data = await post("/sendRequest", {
                receiverId
            })
            return data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "")
        }
    }
)

export const handleApprove = createAsyncThunk(
    "/friends/approveRequest",
    async ({ requestId }, { rejectWithValue }) => {
        try {
            const response = await post("/approve-request", {
                requestId
            })
            return response.data.request
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "")
        }
    }
)

export const handleReject = createAsyncThunk(
    "/friends/rejectRequest",
    async ({ requestId }, { rejectWithValue }) => {
        try {
            const request = await post("/reject-request", {
                requestId
            })
            return request.data.friendRequest
        } catch (error) {
            return rejectWithValue(error.response?.data?.message)
        }
    }
)