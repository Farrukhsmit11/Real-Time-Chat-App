import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    // conversations user _ID 
    //  _id seassion ID friends k anddar store kardo 
    // user first time kisi ko message karega tou seassion create hojagyea
    // jab seassion create hogaya tou usse seassion me messages push hote raheingy
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    messages: [
        {
            senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String, required: true },
        }
    ]
},
    { timestamps: true }
)


export const Session = mongoose.model("Session", sessionSchema)