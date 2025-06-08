import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[],
}

const cartslice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        loadcart:(state,action)=>{
            state.carts = action.payload;
        },
    },
})

export default cartslice.reducer;
export const {loadcart} = cartslice.actions;