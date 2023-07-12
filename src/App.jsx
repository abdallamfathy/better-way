import {useEffect , useState} from "react"
import {Category, HomePage, Login, Register, Shop} from "./pages"
import Loader from "./components/Loader"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import UserDashboard from "./pages/UserDashboard"
import MerchantDashboard from "./pages/MerchantDashboard"
import { AuthProvider } from "./utils/AuthContext"
import { RequireAuth } from "react-auth-kit"
import Contact from "./pages/Contact"
import Page from "./pages/Page"

function App() {
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false) , 1000)
  }, [])
  

  return (
    <div className="bg-web overflow-x-hidden ">
      {!loading && 
        <Router>
          <AuthProvider>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user-dashboard" element={<UserDashboard/>}/>
            {/* <Route path="/merchant-dashboard" element={<MerchantDashboard/>}/> */}
            <Route  path="/merchant-dashboard" element={
              <MerchantDashboard />
            }/>
            {/* <RequireAuth loginPath={'/login'}>
          </RequireAuth> */}
            <Route path="/register" element={<Register/>}/>
            <Route path="/shop/:shopId" element={<Shop/>}/>
            <Route path="/category/:categoryId" element={<Category/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
            <Route path="/page/:pageId" element={<Page/>}/>
          </Routes>
          </AuthProvider>
        </Router>
      }
      {loading && <Loader/>}
    </div>
  )
}

export default App
