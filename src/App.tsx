import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

import UserProvider, { UserContext } from "./providers/UserContext/UserContext";
import RoutesMain from "./routes/RoutesMain"
import { GlobalStyles } from "./styles/global"
import { GlobalReset } from "./styles/reset"
import { useContext } from "react";



function App() {
  const {loading} = useContext(UserContext)

  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <UserProvider>
        <ToastContainer />
        {loading ? null : <RoutesMain />}
      </UserProvider>
    </>
  )
}

export default App;