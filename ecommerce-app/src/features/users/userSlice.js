import { configureStore } from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit'

const UserSlice = createSlice({
    name:'UserSlice',
    initialState:{ user:{}},
    reducers:{
        setUser(state,action){
            state.user = action.payload;
        },
        clearUser(state,action){
            state.user = {}
        }
    }
})

export const {setUser,clearUser} = UserSlice.actions

export default UserSlice;