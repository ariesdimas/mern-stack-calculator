import {createSlice} from "@reduxjs/toolkit";

const initialState={
    mode: "light",
    user:null,
    token:null,
    
}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
          },
        setLogin:(state,actions)=>{
            state.user=actions.payload.user;
            state.token=actions.payload.token;
        },
        setLogout:(state)=>{
            state.user=null;
            state.token=null;
        }
    }
});

export const {setMode,setLogin,setLogout}=authSlice.actions;

export default authSlice.reducer;