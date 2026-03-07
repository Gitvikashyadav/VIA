import { Outlet } from "react-router-dom"
import Navbar from "../client/components/Navbar"

export default function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        <Outlet />
      </div>
    </div>
  )
}