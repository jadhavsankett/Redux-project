import {configureStore} from "@reduxjs/toolkit";
import userslice from "./redusers/UserSlice";
import productslice from "./redusers/ProductSlice";
import cartslice from "./redusers/CartSlice";


export const store = configureStore({
    reducer:{
      userReducer: userslice,
      productReducer: productslice,
      cartReducer: cartslice,
    },
});


//reduser data sairfe slice data store kar ta hai (other wise no )