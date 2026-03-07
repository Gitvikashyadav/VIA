import RoutesConfig from "./routes"
import {createContext,useState} from "react"
export const ct=createContext({})
function App() {

  let [tokenObj,setToken]=useState({"token":"","name":""})
  const updateToken=(obj)=>{
    setToken({...tokenObj,...obj})

  }

  let obj={"token":tokenObj,"updateToken":updateToken}
  return <ct.Provider value={obj}>
  <RoutesConfig />
  </ct.Provider>
}

export default App