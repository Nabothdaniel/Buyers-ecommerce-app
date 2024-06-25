import React from 'react'

const Input = ({placeHolder,inputClass,value,inputChange,inputType}) => {
  return  <input type={inputType} placeholder={placeHolder} value={value} onChange={(e)=>inputChange(e)} className={inputClass} />;
}

export default Input;
