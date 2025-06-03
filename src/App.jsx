import { useContext } from "react";
import { GlobalContext } from "./components/context/GlobalContext.jsx"

function App() {
  const { data } = useContext(GlobalContext)
  console.log(data)
  return (
    <h1>EJA</h1>
  )
}

export default App
