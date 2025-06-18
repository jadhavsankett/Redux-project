// import { useState } from "react"
import { useDispatch , useSelector  } from "react-redux"
import { NavLink , useNavigate} from "react-router-dom"
import { asynclogoutuser } from "../store/actions/UserAction";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=> state.userReducer.users);
  // console.log(user)

  const logouthandler = () => {
    dispatch(asynclogoutuser());
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center gap-5 font-black relative">
      
       <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/"}>Home</NavLink>

       <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/products"}>Products</NavLink>

      {user?<>

        <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/admin/create-product"}>Create-product</NavLink>
      <button 
      onClick={logouthandler}
      className="text-white  py-0.5 px-2 rounded bg-red-500 hover:bg-red-400 absolute top-0 right-5">Log Out</button>

      </>:<>

        <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/login"}>Login</NavLink>

      </>}
     
    </div>
  )
}

export default Navbar
