require("dotenv").config({ path: "./server/.env" })

const express = require("express")
const cors = require("cors")
const connectDB = require("./config/DB_conn")

const app = express()
console.log();


// Connect Database
connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
// app.use("/api/auth", require("./routes/authRoutes"))
// app.use("/api/groups", require("./routes/groupRoutes"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})