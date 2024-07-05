import React from 'react'

const Input = ({placeHolder,inputClass,value,inputChange,inputType,inputId,inputName}) => {
  return  <input type={inputType} placeholder={placeHolder} id={inputId} value={value} name={inputName} onChange={(e)=>inputChange(e)} className={inputClass} />;
}

export default Input;
