import React, { useState } from 'react';
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import Input from '../components/utils/Input';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';


 const Login = () => {
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const setName = (event)=>{
      setNameInput(event.target.value)
  }
  const setPassword = (event)=>{
      setPasswordInput(event.target.value)
  }
  return (
    <section aria-description='login-page' className='px-5 md:px-28 '>
       <div className=' md:max-w-96  m-auto  my-5 h-full w-full rounded-lg bg-white'>
       <h1 className="text-3xl py-3 text-black text-center">Login</h1>
       <form className="px-3 py-4">
        <Input placeHolder='Username' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none md:w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm border border-1 border-gray-400 ' />  
        <Input placeHolder='Email' inputType='Password' value={passwordInput} inputChange={(e)=>setPassword(e)} inputClass='outline-none md:w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm ' />  
        <Button value='Login' btnClass='w-full text-[1.2rem]   mt-2 rounded-md bg-cyan-600 py-2 px-3 hover:bg-cyan-400 text-white duration-200'/>
        </form>
            <p className=" py-3 text-center">Don't  have an account? <Link to='/signup' className='text-cyan-400'> signup </Link></p>
       </div>
    </section>
  )
}

export default Login;
