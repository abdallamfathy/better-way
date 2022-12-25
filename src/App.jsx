import {Navbar , Loader} from './components'
import {useEffect , useState} from "react"

function App() {
  const [loading , setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false) , 1000)
  }, [])
  

  return (
    <>
      {!loading && <Navbar/>}
      {loading && <Loader/>}
    </>
  )
}

export default App
