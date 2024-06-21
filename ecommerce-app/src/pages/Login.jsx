import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button'
import CategorySwipper from '../components/CategorySwipper';

 const Login = () => {
  const [nameInput, setNameInput] = useState('');

  const setName = (event)=>{
      setNameInput(event.target.value)
  }
  return (
    <div className='px-5 md:px-28 '>
        <h1 className="text-3xl text-black text-center">Login</h1>

        <form className="flex justify-center flex-col items-center px-3 py-4 my-5 h-full w-full bg-white">
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={(e)=>setName(e)} inputClass='outline-none w-full  my-2 md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
          <Button/>
        </form>
        <CategorySwipper/>

    </div>
  )
}

export default Login;
