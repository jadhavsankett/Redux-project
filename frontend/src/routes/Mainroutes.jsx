import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login";
import Rigsters from "../pages/Rigsters";
import Products from "../pages/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import Productdetail from "../pages/admin/UpdateProduct";
import UserProfile from "../pages/User/UserProfile";
import Oopspage from "../pages/Oopspage";
import AuthWrapper from "./AuthWrapper";



const Mainroutes = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Products/>}/>
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/rigsters" element={<Rigsters/>}/>

        {/* rap the auth wapper  */}
        <Route path="/admin/create-product" element={<AuthWrapper><CreateProduct/></AuthWrapper>}/>
         <Route path="/admin/user-profile" element={<AuthWrapper><UserProfile/></AuthWrapper>}/>
        <Route path="/product/:id" element={<AuthWrapper><Productdetail/></AuthWrapper>}/>


        <Route path="*" element={<Oopspage/>}/>
    </Routes>
  )
}

export default Mainroutes
