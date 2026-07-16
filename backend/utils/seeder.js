import { User } from "../models/User.js"
import bcrypt from "bcrypt"
import connectDB from "../config/db.js";

import 'dotenv/config';
import mongoose from "mongoose";

const mongodbUri = process.env.MONGO_URI
await mongoose.connect(mongodbUri)

const seedUsers = async () => {
    try {

        await User.deleteMany()

        const users = [
            {
                name: "Super Admin",
                email: "admin200@gmail.com",
                password: await bcrypt.hashSync("Admin@123", 10),
            }
        ]

        await User.insertMany(users)
        console.log("user inserted sucessfully")

    } catch (error) {
        console.error("Error while seeding users", error)
    }
}

seedUsers()