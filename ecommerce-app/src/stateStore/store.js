import {configureStore} from '@reduxjs/toolkit';
import UserSlice from '../features/users/userSlice';
import cartReducer from '../features/cart/cartSlice'

export default configureStore({
    reducer:{
        cartItem:cartReducer,
        user:UserSlice
    }
})