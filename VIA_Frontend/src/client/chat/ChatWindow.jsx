

import {
  FaUserPlus,
  FaUserMinus,
  FaVideo,
  FaSignOutAlt,
  FaLock,
  FaMicrophone,
  FaPaperPlane
} from "react-icons/fa"

import { useEffect, useState } from "react"

export default function ChatWindow({ selectedChat }) {

function IconButton({ icon, label, color }) {

  return (
    <div className="relative group flex flex-col items-center">

      <button
        className={`${color} text-white p-3 rounded-lg hover:scale-105 transition`}
      >
        {icon}
      </button>

      {/* TOOLTIP */}

      <span className="absolute top-12 scale-0 group-hover:scale-100 transition bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
        {label}
      </span>

    </div>
  )
}


  const colors = [
    "text-purple-600",
    "text-blue-600",
    "text-green-600",
    "text-red-500",
    "text-orange-500",
    "text-pink-600"
  ]

  const [colorIndex, setColorIndex] = useState(0)

  // auto change color every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // 🔹 NO CHAT SELECTED
  if (selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <img
            className="w-80 mx-auto mb-6"
            src="/photo/Nochatimg.png"
            alt="No chat"
          />

          <h2 className="text-3xl font-semibold text-gray-600">
            No chat selected
          </h2>

          <p className="text-gray-400 mt-2">
            Select a conversation to start messaging
          </p>
        </div>
      </div>
    )
  }

  // 🔹 CHAT SELECTED UI
  

   return (
    <div className="flex-1 flex flex-col bg-gray-100 mx-5 mb-5 mt-5">

      {/* HEADER */}

      <div className="flex justify-between items-center bg-white shadow px-8 py-6 rounded-md px-3">

        {/* LEFT */}

        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-semibold text-purple-700">
            YADAV
          </h2>

          <span className="text-lg font-medium text-gray-700">
            VIKASH KUMAR,
          </span>
        </div>


        {/* RIGHT ICONS */}

        <div className="flex items-center gap-4">

          <IconButton
            icon={<FaUserPlus />}
            label="Add User"
            color="bg-blue-600"
          />

          <IconButton
            icon={<FaUserMinus />}
            label="Remove User"
            color="bg-red-500"
          />

          <IconButton
            icon={<FaVideo />}
            label="Video Call"
            color="bg-blue-600"
          />

          <IconButton
            icon={<FaSignOutAlt />}
            label="Exit Room"
            color="bg-red-500"
          />

          <IconButton
            icon={<FaLock />}
            label="Lock Room"
            color="bg-red-500"
          />

        </div>
      </div>


      {/* CHAT AREA */}

      <div className="flex-1"></div>


      {/* INPUT AREA */}

      <div className="flex items-center gap-3 bg-white ">

        <input
          type="text"
          placeholder="Type a message..."
           className="flex-1 border border-gray-200 rounded-md px-3 py-2 outline-none"
        />

        <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          <FaMicrophone />
        </button>

        <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          <FaPaperPlane />
        </button>

      </div>

    </div>
  )
}