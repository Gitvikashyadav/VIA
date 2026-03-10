const express = require("express")
const router = express.Router()

const {
createRoom,
sendMessage,
getMessages
} = require("../controllers/chatController")

router.post("/create-room", createRoom)
router.post("/send-message", sendMessage)
router.get("/messages/:roomId", getMessages)

module.exports = router