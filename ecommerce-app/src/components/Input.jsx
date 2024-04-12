import React from 'react'

const Input = ({placeholder,inputClass,value,inputChange}) => {
  return  <input type="text" placeholder={placeholder} value={value} onChange={(e)=>inputChange(e)} className={inputClass} />;
}

export default Input;
