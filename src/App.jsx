import {useEffect , useState} from "react"
import {Category, HomePage, Login, Register, Shop} from "./pages"
import Loader from "./components/Loader"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import UserDashboard from "./pages/UserDashboard"

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
            <Route path="/user-dashboard" element={<UserDashboard/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/shop/:shopId" element={<Shop/>}/>
            <Route path="/category/:categoryId" element={<Category/>}/>
          </Routes>
        </Router>
      }
      {loading && <Loader/>}
    </div>
  )
}

export default App
