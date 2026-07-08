import express from "express"
import cors from "cors"
import 'dotenv/config';
const app = express();
const PORT = 5000
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import multer from "multer";
import upload from "./config/multer.js"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

connectDB()


const fileupload = multer({ dest: "uploads/" })

app.get("/", (request, response) => {
    response.send("Hello world backend working")
})

app.use(authRoutes)
app.use(userRoutes)

app.post("/upload", upload.single("attachment"), (req, res) => {

    console.log("File:", req.file);
    console.log("Message text:", req.body.message);

    try {
        res.status(200).send({ message: 'Message and attachment received successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });

    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})