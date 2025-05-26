import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// App config
const app = express()
const port = 4000 

// Apply CORS - this must come before any route definitions
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token, atoken");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Use the cors middleware as a backup
app.use(cors());

// Connect to MongoDB and Cloudinary
try {
    connectDB()
    connectCloudinary()
} catch (error) {
    console.error("Failed to initialize services:", error)
    process.exit(1)
}

// Middlewares
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// API endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
    res.send("API Working")
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ success: false, message: 'Something went wrong!' })
})

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    console.log(`API is accessible at: http://localhost:${port}`)
})