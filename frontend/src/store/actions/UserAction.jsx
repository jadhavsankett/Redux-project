import { toast } from "react-toastify"
import axios from "../../api/axiosconfig";
import { loaduser, removeuser } from "../redusers/UserSlice";


export const asyncurrentuser = (user) => async (dispatch, getstate) => {
    try {

       const user =  JSON.parse(localStorage.getItem("users"));
       if(user) dispatch(loaduser(user));
       else toast.error("user not logged in!");

    } catch (error) {
        toast.error("Error: Could not Login user");
    }
}


export const asynclogoutuser = () => async (dispatch, getstate) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeuser());
        // console.log("log out the user .");
    } catch (error) {
        toast.error("Error: Could not Login user");
    }
}


export const asyncloginuser = (user) => async (dispatch, getstate) => {
    try {
        const {data} = await axios.get(
            `/users?email=${user.email}&pass=${user.pass}`
        );
        localStorage.setItem("users",JSON.stringify(data[0]));
    } catch (error) {
        toast.error("Error: Could not Login user");
    }
}


export const asyncregisteruser = (user) => async (dispatch, getstate) => {
    try {
        const res = await axios.post("/users", user);  //post means data dalna and get means data lena;
        
    } catch (error) {
        toast.error("Error: Could not register user");
    }
}

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch(`/users/${id}`, user);
        localStorage.setItem("users", JSON.stringify(data));
    } catch (error) {
        toast.error("Error: update user");
       // Log actual error for debugging
    }
};

export const asyndeleteuser = (id) => async (dispatch, getstate) => {
    try {

     await axios.delete("/users/"+id);
     dispatch(asynclogoutuser());
    
    } catch (error) {
        toast.error("Error: Could not delete the product ");
    }
}