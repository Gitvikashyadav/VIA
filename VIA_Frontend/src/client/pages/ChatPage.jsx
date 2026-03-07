

import { ct } from "../../app/App";
import ChatSidebar from "../chat/ChatSiderbar";
import ChatWindow from "../chat/ChatWindow";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
let obj=useContext(ct)
let navigate=useNavigate()

useEffect(()=>{
 console.log(obj);
 if(obj.token.token==""){
  navigate("/")

 }
 

},[])
  return (
    <>
      <ChatSidebar/>
     <ChatWindow/>
    </>
  )
}