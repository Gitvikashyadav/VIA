export default function ChatSidebar() {
  return (
    <div className="w-80 bg-white border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>

      <div className="space-y-3">
        <div className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
          John Doe
        </div>
        <div className="p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
          Team Meeting
        </div>
      </div>
    </div>
  )
}