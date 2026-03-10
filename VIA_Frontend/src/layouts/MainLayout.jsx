import { Outlet } from "react-router-dom"
import Navbar from "../client/components/Navbar"
import { useState } from "react"
export default function MainLayout() {

   const [sidebarOpen, setSidebarOpen] = useState(true)
  return (
   

    <div className="h-screen flex flex-col">

      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex flex-1">
        <Outlet context={{ sidebarOpen }} />
      </div>

    </div>
  )
}