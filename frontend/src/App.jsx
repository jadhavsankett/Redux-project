import { useEffect } from "react"
import Navbar from "./componets/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { asyncurrentuser } from "./store/actions/UserAction"
import { useDispatch, useSelector } from "react-redux"
import { asynloadproduct } from "./store/actions/ProductAction"

const App = () => {
  const dispatch = useDispatch();
  const {users} =  useSelector((state)=> state.userReducer);
const {products} =  useSelector((state)=> state.productReducer);

useEffect(()=>{
  !users && dispatch(asyncurrentuser());  
},[users])

useEffect(()=>{
 products.length == 0 && dispatch(asynloadproduct());
},[products])

  return (
    <div className="py-5">
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App
