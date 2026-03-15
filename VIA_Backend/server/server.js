require("dotenv").config({ path: "./server/.env" })

const http = require("http")
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/DB_conn")

const authRoutes = require("./routes/authRoutes")
const chatRoutes = require("./routes/chatRoutes")
const UserRouter  = require("./routes/userRoute")


const app = express()


// Connect Database
connectDB()

// Middleware
app.use(cors())
app.use(express.json())



const PORT = process.env.PORT || 5000










// create http server
const server = http.createServer(app)
const { Server } = require("socket.io")

// create socket server
const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173"
  }
})

// import socket logic
const chatSocket = require("./sockets/chatSocket")

// run socket logic
chatSocket(io)

// start server
server.listen(PORT,()=>{
  console.log(`🚀 Server running on port ${PORT}`)
})










app.use("/api/auth", authRoutes)





app.use("/api/chat", chatRoutes)

app.use("/api/user",UserRouter)
