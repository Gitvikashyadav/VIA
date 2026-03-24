import RoutesConfig from "./routes";
import { createContext, useState } from "react";
export const ct = createContext({});
import Cookies from "js-cookie";
function App() {
  const savedAuth = Cookies.get("auth");
  const initialToken = savedAuth ? JSON.parse(savedAuth) : null;
  const [token, setToken] = useState(initialToken)
  const updateToken = (Data) => {
    setToken(Data);
  };

  let obj = { token: token, updateToken: updateToken };
  return (
    <ct.Provider value={obj}>
      <RoutesConfig />
    </ct.Provider>
  );
}

export default App;
