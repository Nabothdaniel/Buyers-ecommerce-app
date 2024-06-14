import React,{useState} from 'react';
import Input from '../components/Input';

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
function SignUp() {

  const changeInput=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
     <form>
      <Input placeHolder='userName'inputClass=''value='signup'inputChange={changeInput}inputType='text'/>
     </form>
    </div>
  )
}

export default SignUp;

