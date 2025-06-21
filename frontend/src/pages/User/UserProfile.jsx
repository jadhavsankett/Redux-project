import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyndeleteproduct, asynupdateproduct } from "../../store/actions/ProductAction";
import { asynclogoutuser, asyncupdateuser, asyndeleteuser } from "../../store/actions/UserAction";

const UserProfile = () => {
  // const {
  //        userReducer:{users}
  //       } 
  //       =  useSelector((state)=> state);
  const users =  useSelector((state)=> state.userReducer.users);


   const {register , handleSubmit ,reset} = useForm({
    defaultValues:{
        name:users?.name,
        email:users?.email,
        pass:users?.pass
    }
   })

   const dispatch = useDispatch();
   const navigate = useNavigate()
  
    const updateuserhandler = ( user) => {
      dispatch(asyncupdateuser(users.id, user));
    }

     const logoutuserhandler = async () => {
      await dispatch(asynclogoutuser());
      navigate("/login");
    }

    const removehandler =()=>{
      dispatch(asyndeleteuser(users.id));
      navigate("/login")
    }

  return users?(
    <div>
        
     <div className="w-screen flex justify-center items-center" id="move">    
          <form 
          onSubmit={handleSubmit(updateuserhandler)}
          className=" w-[80%] h-[72%] p-5 mt-5">
            <h1 className="font-black text-3xl text-center text-gray-500">Edit Profile</h1>
          
            <input 
            {...register("name")}
            className="mx-3 mt-5 border py-3 px-5 outline-0 rounded w-[90%]"
            type="text" placeholder="pentonic camel"/>
             
            <input 
            {...register("email")}
            className="mx-3 mt-4 border py-3 px-5 outline-0 rounded w-[90%]"
            type="email" placeholder="pentonic@camel.com"/>

            <input 
            {...register("pass")}
            className="mx-3 mt-4 border py-3 px-5 outline-0 rounded w-[90%]"
            type="password" placeholder="******"/>

            <button className="mx-2 mt-4 px-5 py-3 border text-black rounded font-black text-center hover:scale-102 duration-30 shadow">Change</button>
            
            <button 
            onClick={removehandler} 
            className="mx-3 mt-3 px-5 py-3  bg-black text-white rounded font-black text-center hover:scale-102 duration-30 shadow">Delete-user</button>    
            
            <button 
            onClick={logoutuserhandler} 
            className="mt-3 px-5 py-3  bg-red-500 text-white rounded font-black text-center hover:scale-102 duration-30 shadow">LogOut</button>                    
          </form>  
          </div>

    </div>
  ):"Lodding"
}

export default UserProfile
