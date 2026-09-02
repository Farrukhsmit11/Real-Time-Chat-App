import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    user2: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    messages: { type: Array, default: [] }
},
    { timestamps: true }
)


export const Session = mongoose.model("Session", sessionSchema)