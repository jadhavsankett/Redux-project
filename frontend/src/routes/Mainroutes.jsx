import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Rigsters from "../pages/Rigsters";
import Products from "../pages/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import Productdetail from "../pages/admin/UpdateProduct";



const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/rigsters" element={<Rigsters/>}/>


        <Route path="/admin/create-product" element={<CreateProduct/>}/>
        <Route path="/product/:id" element={<Productdetail/>}/>
    </Routes>
  )
}

export default Mainroutes
