import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    receiverId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
},
    { timestamps: true }
)

export const Message = mongoose.model("Message", messageSchema)