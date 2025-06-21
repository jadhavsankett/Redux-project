
import { lazy } from "react";
import { Route, Routes } from "react-router-dom"
import UnAuthWrapper from "./UnAuthWrapper copy";
const  Login= lazy(()=>import( "../pages/Login"));
const Rigsters = lazy(()=>import("../pages/Rigsters"));
const Products = lazy(()=>import("../pages/Products"));
const CreateProduct = lazy(()=>import("../pages/admin/CreateProduct"));
const Productdetail = lazy(()=>import( "../pages/admin/UpdateProduct"));
const UserProfile = lazy(()=>import("../pages/User/UserProfile"));
const Oopspage = lazy(()=>import("../pages/Oopspage"));
const AuthWrapper = lazy(()=>import("./AuthWrapper"));
const Cart = lazy(()=>import("../pages/Cart"));



const Mainroutes = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Products/>}/>
       
        <Route path="/login" element={<UnAuthWrapper><Login/></UnAuthWrapper>}/>
        <Route path="/rigsters" element={<UnAuthWrapper><Rigsters/></UnAuthWrapper>}/>

        {/* rap the auth wapper  */}
        <Route path="/admin/create-product" element={<AuthWrapper><CreateProduct/></AuthWrapper>}/>
         <Route path="/admin/user-profile" element={<AuthWrapper><UserProfile/></AuthWrapper>}/>
        <Route path="/product/:id" element={<AuthWrapper><Productdetail/></AuthWrapper>}/>
         {/* <Route path="/cart" element={<AuthWrapper><Cart/></AuthWrapper>}/> */}

        <Route path="*" element={<Oopspage/>}/>
    </Routes>
  )
}

export default Mainroutes
