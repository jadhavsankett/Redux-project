import { useEffect } from "react"
import Navbar from "./componets/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { asyncurrentuser } from "./store/actions/UserAction"
import { useDispatch } from "react-redux"
import { asynloadproduct } from "./store/actions/ProductAction"

const App = () => {
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(asyncurrentuser());
  dispatch(asynloadproduct());
},[])

  return (
    <div className="py-5">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App
