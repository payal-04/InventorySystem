import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState:{
       user: {
        name: 'dsadads'
       }
    },
    reducers:{
        setUser(state,action){
            state.user = action.payload
        },
        removeUser(state,action){
           // state.user = {}
        }
    }
})

export const {removeUser,setUser} = UserSlice.actions;

export const UserSlicePath = (state: any) => state.UserSlice.user