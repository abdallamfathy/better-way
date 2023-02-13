import {useEffect , useState} from "react"
import {Category, HomePage, Login, Register, Shop} from "./pages"
import Loader from "./components/Loader"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

function App() {
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false) , 1000)
  }, [])
  

  return (
    <div className="bg-web overflow-x-hidden ">
      {!loading && 
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/Category" element={<Category/>}/>
          </Routes>
        </Router>
      }
      {loading && <Loader/>}
    </div>
  )
}

export default App
