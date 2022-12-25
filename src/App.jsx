import {useEffect , useState} from "react"
import Home from "./components/Home"
import Loader from "./components/Loader"

function App() {
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false) , 1000)
  }, [])
  

  return (
    <>
      {!loading && <Home/>}
      {loading && <Loader/>}
    </>
  )
}

export default App
