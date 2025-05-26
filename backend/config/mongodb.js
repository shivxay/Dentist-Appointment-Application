import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB successfully")
    } catch (error) {
        console.error("MongoDB connection error:", error)
        process.exit(1)
    }
}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.