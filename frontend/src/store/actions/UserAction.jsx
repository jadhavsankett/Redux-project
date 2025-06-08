import { toast } from "react-toastify"
import axios from "../../api/axiosconfig";
import { loaduser } from "../redusers/UserSlice";


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
        console.log("log out the user .");
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
        console.log(res)

    } catch (error) {
        toast.error("Error: Could not register user");
    }
}