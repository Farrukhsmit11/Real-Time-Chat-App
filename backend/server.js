import express from "express"
import cors from "cors"
import 'dotenv/config';
const app = express();
const PORT = 5000
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"

app.use(express.json())

app.use(cors())

connectDB()

app.get("/", (request, response) => {
    response.send("Hello world backend working")
})

app.use(authRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})