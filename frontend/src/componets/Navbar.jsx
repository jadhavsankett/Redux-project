import { useSelector  } from "react-redux"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const user = useSelector((state)=> state.userReducer.users);
  

  return (
    <div className="flex justify-center items-center gap-5 font-black relative">
      
       <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/"}>Home</NavLink>

      {user?<>
      
      {user && user?.isAdmin&&
        <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/admin/create-product"}>Create-product</NavLink>
      }

      <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/admin/user-profile"}>Profile</NavLink>
      {/* <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/cart"}>Cart</NavLink> */}

      </>:<>

        <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/login"}>Login</NavLink>

      </>}
     
    </div>
  )
}

export default Navbar
