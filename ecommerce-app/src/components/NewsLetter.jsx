import React,{useState} from'react'
import { Button } from './Button';
import Input from './Input';

export const NewsLetter = () => {
    const [letterVal,setLetterVal] = useState('');

    const handleNewsInput = (event)=>{
       setLetterVal(event.target.value);
    }
  return (
    <section className='md:px-24 px-5 md:py-16 py-4  bg-black text-white'>
         <div className="mt-3 flex flex-col md:flex-row items-center justify-between ">
            <div className="">
                <h1 className="text-3xl">Subscribe Us Now</h1>
                <p className='md:w-1/2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est nihil optio hic quidem accusantium ad ducimus porro expedita dolor.</p>
            </div>
            <div className='w-full md:w-auto'>
                <Input inputType='text' value={letterVal} inputChange={handleNewsInput} inputClass='border-none py-2   px-0 md:px-3 my-2 w-full outline-none'/>
                <Button value='Subscribe' btnClass='w-full btn hover:bg-cyan-400 text-white duration-200'/>

            </div>
         </div>
    </section>
  )
}

