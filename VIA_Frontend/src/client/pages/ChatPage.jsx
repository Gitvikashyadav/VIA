

import { ct } from "../../app/App";
import ChatSidebar from "../chat/ChatSiderbar";
import ChatWindow from "../chat/ChatWindow";
import { useContext, useEffect ,useState} from "react";
import { useNavigate,useOutletContext } from "react-router-dom";


export default function ChatPage() {
let obj=useContext(ct)
let navigate=useNavigate()
const [selectedChat, setSelectedChat] = useState(null)

const { sidebarOpen } = useOutletContext()
const [Refresh,setRefresh]=useState(false)
 
const refreshSidebar = () => {
  
  
  setRefresh(prev => !prev)
  
}

useEffect(()=>{
 
 if(obj.token.token==""){
  navigate("/")

 }
 

},[])
  return (
    
    
     <>


        {sidebarOpen && (
          <ChatSidebar Refresh={Refresh}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        )}

        <ChatWindow refreshSidebar={refreshSidebar} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

    

    </>
  )
}