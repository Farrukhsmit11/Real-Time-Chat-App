import mongoose from "mongoose"

const mongodbUri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(mongodbUri)
        console.log("Mongodb connected sucessfully")
    } catch (error) {
        console.error("Mongodb connected failed", error)
        process.exit(1)
    }
}

export default connectDB