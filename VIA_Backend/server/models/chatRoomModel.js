const mongoose = require("mongoose")

const chatRoomSchema = new mongoose.Schema({

  name: String,

  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  isGroup: Boolean

})

module.exports = mongoose.model("ChatRoom", chatRoomSchema)