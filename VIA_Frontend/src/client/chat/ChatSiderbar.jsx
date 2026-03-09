// export default function ChatSidebar() {
//   return (
//     <div className="w-80 bg-white border-r p-4">
//       <h2 className="text-lg font-semibold mb-4">Chats</h2>

//       <div className="space-y-3">
//         <div className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
//           John Doe
//         </div>
//         <div className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
//           Team Meeting
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState } from "react"
 import { Plus,Users } from "lucide-react"

export default function ChatSidebar() {
  const [rooms, setRooms] = useState([])
  const [roomName, setRoomName] = useState("")

  const createRoom = () => {
    if (!roomName.trim()) return

    const newRoom = {
      id: Date.now(),
      name: roomName
    }

    setRooms([...rooms, newRoom])
    setRoomName("")
  }

  return (
    <div className="w-80 h-full bg-white flex flex-col shadow-[6px_0_8px_rgba(0,0,0,0.08)]">

      {/* Room List */}
      <div className="flex-1 p-4 overflow-y-auto">

        {rooms.length === 0 ? (
          <h2 className="text-2xl font-semibold text-gray-700">
            No rooms
          </h2>
        ) : (
          <div className="space-y-3">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center gap-2  p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
              >
                <Users size={18} className="text-gray-600" />
               <span>{room.name}</span>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Create Room Section */}
      <div className=" p-4">

        <p className="font-semibold mb-2">
          Create new room
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Room name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="flex-1 border border-gray-200 rounded-md px-3 py-2 outline-none"
          />

          <button
            onClick={createRoom}
            className="bg-blue-600 text-white px-4 rounded-md flex items-center justify-center hover:bg-blue-700"
          >
            <Plus size={18}/>
          </button>
        </div>

      </div>
    </div>
  )
}