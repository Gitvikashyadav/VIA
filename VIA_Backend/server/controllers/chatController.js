const ChatRoom = require("../models/chatRoomModel")
const Message = require("../models/messageModel")

// CREATE ROOM

exports.createRoom = async (req, res) => {

try {

const { name, users, isGroup } = req.body

const room = await ChatRoom.create({
name,
users,
isGroup
})

res.json({
success: true,
room
})

} catch (error) {
    
    

res.status(500).json({
error: error.message
})

}

}

// SEND MESSAGE

exports.sendMessage = async (req, res) => {

try {

const { sender, roomId, message } = req.body

const newMessage = await Message.create({
sender,
roomId,
message
})

res.json({
success: true,
newMessage
})

} catch (error) {

res.status(500).json({
error: error.message
})

}

}

// // GET MESSAGES {


exports.getMessages = async (req, res) => {

try {
   const roomId = req.params.roomId.trim()

const messages = await Message.find({"roomId":roomId}).populate("sender", "name email")



res.json(messages)

} catch (error) {

res.status(500).json({
error: error.message
})

}

}