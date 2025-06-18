import { toast } from "react-toastify";
import axios from "../../api/axiosconfig";
import {loadproduct} from "../redusers/ProductSlice";

export const asynloadproduct = (user) => async (dispatch, getstate) => {
    try {

        const {data} = await axios.get("/products");
        dispatch(loadproduct(data))
    
    } catch (error) {
        toast.error("Error: Lodding product please wait!");
    }
}



export const asyncreateproduct = (products) => async (dispatch, getstate) => {
    try {

     await axios.post("/products",products);
     dispatch(asynloadproduct());
    
    } catch (error) {
        toast.error("Error: Could not create the new product");
    }
}

export const asynupdateproduct = (id, products) => async (dispatch, getstate) => {
    try {

     await axios.patch("/products/"+id ,products);
     dispatch(asynloadproduct());
    
    } catch (error) {
        toast.error("Error: Could not update the product");
    }
}

export const asyndeleteproduct = (id) => async (dispatch, getstate) => {
    try {

     await axios.delete("/products/"+id);
     dispatch(asynloadproduct());
    
    } catch (error) {
        toast.error("Error: Could not delete the product ");
    }
}

