

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
 

useEffect(()=>{
 console.log(obj);
 if(obj.token.token==""){
  navigate("/")

 }
 

},[])
  return (
    
    
     <>


        {sidebarOpen && (
          <ChatSidebar
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        )}

        <ChatWindow selectedChat={selectedChat} />

    

    </>
  )
}