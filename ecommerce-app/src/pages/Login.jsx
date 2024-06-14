import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button'

 const Login = () => {
  return (
    <div className='m-auto h-full w-full'>
        <h1 className="text-3xl text-black text-center">Login</h1>

        <div className="flex justify-center items-center rounded-sm  bg-white px-10 py-5">
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Button/>
        </div>
    </div>
  )
}

export default Login;
