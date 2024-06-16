import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button'

 const Login = () => {
  const [nameInput, setNameInput] = useState('')
  return (
    <div className=''>
        <h1 className="text-3xl text-black text-center">Login</h1>

        <div className="flex justify-center items-center rounded-sm  bg-white px-10 py-5">
        <Input placeHolder='Name' inputType='text' value={nameInput} inputChange={setNameInput} inputClass='outline-none w-full md:w-auto md:mx-18  block px-5 py-3 rounded-sm bg-indigo-300' />  
          <Button/>
        </div>
    </div>
  )
}

export default Login;
