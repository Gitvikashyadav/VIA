import { ct } from "../../app/App";
import ChatSidebar from "../chat/ChatSiderbar";
import ChatWindow from "../chat/ChatWindow";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import VideoCall from "../components/VideoCall";
import socket from "../socket/socket";
import IncomingCall from "../components/IncomingCall";

export default function ChatPage() {
  let obj = useContext(ct);
  let navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(null);

  const { sidebarOpen, setSidebarOpen } = useOutletContext();
  const [Refresh, setRefresh] = useState(false);
  const [CallIs, setCalls] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);
  const [callData, setCallData] = useState(null);

  let roomId,
    userId = "";

  //when video call is on that time sidebar close

  if (selectedChat) {
    roomId = selectedChat._id;

    userId = selectedChat.createdBy._id;
  }

  const refreshSidebar = () => {
    setRefresh((prev) => !prev);
  };

  useEffect(() => {
    if (obj.token.token == "") {
      navigate("/");
    }
  }, []);

  return (
    <>
      {/* ✅ ALWAYS RENDER (but hide when call active) */}
      <div className={CallIs ? "hidden" : "flex w-full"}>
        {sidebarOpen && (
          <ChatSidebar
            Refresh={Refresh}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        )}

        <ChatWindow
          refreshSidebar={refreshSidebar}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          setCalls={setCalls}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {/* ✅ OVERLAY VIDEO CALL */}
      {CallIs && (
        <div className="fixed inset-0 z-50">
          <VideoCall
            roomId={roomId}
            userId={userId}
            setCalls={setCalls}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      )}
    </>
  );
}
