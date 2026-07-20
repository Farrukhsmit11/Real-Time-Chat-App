import express from "express"
import http from "http"
import { Server } from "socket.io"
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

const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
    console.log("User a connected", socket.id)
})

app.get("/", (request, response) => {
    response.send("Hello world backend working")
})

server.listen(PORT, (request, response) => {
    console.log(`Server is running on ${PORT}`)
})