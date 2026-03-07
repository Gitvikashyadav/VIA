import { useNavigate, Link } from "react-router-dom"
import { useState,useContext } from "react"
import axios from "axios"
import { ct } from "../../app/App"



export default function LoginPage() {

const navigate=useNavigate()
const obj=useContext(ct)

  const [success,setSuccess]=useState()
  const [formData, setFormData] = useState({
      email: "",
      password: ""
      
    })

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmitL=async()=>{
    try{
     
     
     const res=await axios.post("http://localhost:5000/api/auth/login",formData)
     setSuccess("successfully Login 🎉 ")
     console.log("Response Dtataaa",res.data);
     obj.updateToken({"token":res.data.token,"name":res.data.user.name})
     navigate("/chatpage")
  
  }catch(err){
    setSuccess("Error Login  ")

    }
  }




 
  return (
    <div className="h-screen flex items-center justify-center bg-primary">
      
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        {success && (
          <div className="flex items-center justify-center mb-4 p-3 bg-green-100 text-green-600 rounded-lg text-sm">
            {success}
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"  
          className="w-full mb-4 p-3 border rounded-lg"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
          name="password"
          onChange={handleChange}
        />

        <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-700" onClick={handleSubmitL}>
          Login
        </button>
        <p className="text-center text-sm text-gray-500 mt-6" >
           if Account does'nt exist ?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register new
          </Link>
        </p>
      </div>
      
    </div>
  )
}