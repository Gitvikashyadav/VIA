const Message = require("../models/messageModel")

module.exports = (io) => {

  io.on("connection", (socket) => {

    console.log("User Connected:", socket.id)


    // Join Room

    socket.on("joinRoom", (roomId) => {

      socket.join(roomId)

      console.log("User joined room:", roomId)

    })


    // Send Message

    socket.on("sendMessage", async (data) => {

      const { roomId, senderId, message } = data

      const newMessage = await Message.create({
        sender: senderId,
        roomId,
        message
      })
      const messageWithUser = await newMessage.populate("sender", "_id name")

      io.to(roomId).emit("receiveMessage", messageWithUser)

    })


    // Leave Room

    socket.on("leaveRoom", (roomId) => {

      socket.leave(roomId)

    })


    socket.on("disconnect", () => {

      console.log("User Disconnected")

    })

  })

}