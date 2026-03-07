// export default function ChatWindow() {
//   return (
//     <div className="flex-1 flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//        <img className="w-130 mx-auto mb-6" src="/photo/Nochatimg.png" alt="No chat" />
//         <h2 className="text-3xl font-semibold text-gray-600">
//           No chat selected
//         </h2>
//         <p className="text-gray-400 mt-2">
//           Select a conversation to start messaging
//         </p>
//       </div>
//     </div>
//   )
// }

import { useEffect, useState } from "react"

export default function ChatWindow({ selectedChat }) {

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
  if (!selectedChat) {
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
    <div className="flex flex-col flex-1 bg-gray-100">

      {/* HEADER */}
      <div className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">

        <h2 className={`text-xl font-bold ${colors[colorIndex]}`}>
          {selectedChat.name}
        </h2>

        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-3 py-2 rounded-lg">
            📹
          </button>

          <button className="bg-red-500 text-white px-3 py-2 rounded-lg">
            🔒
          </button>
        </div>

      </div>

      {/* MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {/* example messages */}

        <div className="flex justify-start">
          <div className="bg-white px-4 py-2 rounded-xl shadow">
            Hello Vikash 👋
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow">
            Hi Yadav!
          </div>
        </div>

      </div>

      {/* MESSAGE INPUT */}
      <div className="p-4 bg-white border-t flex items-center gap-3">

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-lg px-4 py-3 focus:outline-none"
        />

        <button className="bg-blue-600 text-white px-4 py-3 rounded-lg">
          🎤
        </button>

        <button className="bg-blue-600 text-white px-4 py-3 rounded-lg">
          ➤
        </button>

      </div>

    </div>
  )
}