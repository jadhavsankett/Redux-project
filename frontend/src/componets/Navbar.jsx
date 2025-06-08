import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-5 font-black">
      <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/"}>Home</NavLink>

      <NavLink 
      className={(e)=>e.isActive?"text-gray-400":" "}
      to={"/login"}>Login</NavLink>
    </div>
  )
}

export default Navbar
