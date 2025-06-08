import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { asyncregisteruser } from "../store/actions/UserAction";
import { useDispatch } from "react-redux";

const Rigsters = () => {
   const {register , handleSubmit ,reset} = useForm()
   const dispatch = useDispatch();
   const navigate = useNavigate();
  
    const Rigstershandler = (user) => {
       user.id = nanoid();
       user.isAdmin = false;
       dispatch(asyncregisteruser(user));
       navigate("/login")
    }

  return (
    <div className="w-screen h-screen px-10 mt-2">
       <div className="w-[100%] h-[80%] flex rounded-xl bg-[url('https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center p-5">
         
          <div className="w-1/2 flex flex-col gap-5 justify-center items-center p-5">
          <h1 className=" text-yellow-400 text-6xl font-black border-b-2 pb-4">Welcome!</h1>
          <p className="text-orange-300 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus officiis non necessitatibus, asperiores repellat animi commodi error hic.</p>
          </div>

          <div className="w-1/2 px-5 h-screen flex justify-center ">
          <form 
          onSubmit={handleSubmit(Rigstershandler)}
          className=" w-[70%] h-[70%] bg-gray-100/50 rounded-2xl p-5">

            <h1 className="font-black text-3xl text-center text-gray-500">Sing in</h1>

            <h3 className="mx-5 mt-2 font-black text-amber-700">User Name</h3>
            <input 
            {...register("name")}
            className="mx-3 bg-amber-100/70 py-1 px-3 outline-0 rounded-xl"
            type="text" placeholder="Enter Name.."/>

            <h3 className="mx-5 font-black text-amber-700">Email id</h3>

            <input 
            {...register("email")}
            className="mx-3 bg-amber-100/70 py-1 px-3 outline-0 rounded-2xl "
            type="email" placeholder="Email id.."/>

            <h3 className="mx-5 font-black text-amber-700">Password</h3>

            <input 
            {...register("pass")}
            className="mx-3 bg-amber-100/70 py-1 px-3 outline-0 rounded-2xl "
            type="password" placeholder="********"/>

            <button className="mx-3 mt-2 px-5 py-1 bg-amber-400 text-amber-700 rounded-xl font-black text-center hover:scale-102 duration-30">Rigster User</button>
            <p className="mx-3 mt-2 font-thin">
               Already have an account?
               <Link
               className="text-blue-400" 
               to="/login">
               Login
               </Link>
            </p>
          </form>
          </div>
       </div>
    </div>
  )
}

export default Rigsters
