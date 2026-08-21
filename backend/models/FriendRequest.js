import mongoose from "mongoose";

const friendRequestSchema = mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" }
},
    { timestamps: true }
)

export const FriendRequest = mongoose.model("FriendRequest", friendRequestSchema)