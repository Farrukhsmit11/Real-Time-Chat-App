import express from "express"
import cors from "cors"
import 'dotenv/config';
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import requestRoutes from "./routes/requestRoutes.js"
import friendRoutes from "./routes/friendRoutes.js"

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            " https://real-time-chat-app-production-0408.up.railway.app/"
        ],
        credentials: true
    })
);

connectDB()

app.use(authRoutes)
app.use(userRoutes)
app.use(messageRoutes)
app.use(requestRoutes)
app.use(friendRoutes)

app.get("/", (request, response) => {
    response.send("Hello world backend working")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})