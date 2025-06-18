import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:null,
};


const userslice = createSlice({
    name : "user",
    initialState,
    reducers:{
        loaduser:(state,action) => {
            state.users = action.payload
        },
        removeuser:(state,action) => {
            state.users = null;
        }
    },
});


export default userslice.reducer;
export const { loaduser, removeuser } = userslice.actions;