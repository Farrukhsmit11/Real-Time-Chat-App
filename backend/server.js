import express from "express"
import cors from "cors"
import 'dotenv/config';
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"

const app = express()
const PORT = 5000
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

connectDB()

app.use(authRoutes)
app.use(userRoutes)
app.use(messageRoutes)

app.get("/", (request, response) => {
    response.send("Hello world backend working")
})

app.listen(PORT, (request, response) => {
    console.log(`Server is running on ${PORT}`)
})