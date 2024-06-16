import React,{useState} from'react'
import  Button  from './Button';
import Input from './Input';

export const NewsLetter = () => {
    const [letterVal,setLetterVal] = useState('');

    const handleNewsInput = (event)=>{
       setLetterVal(event.target.value);
    }
  return (
    <section className='md:px-24 px-5 md:py-16 py-4  bg-black text-white'>
         <div className="mt-3 inline-flex flex-col md:flex-row items-center justify-between ">
            <div className="">
                <h1 className="text-3xl">Subscribe Us Now</h1>
                <p className='md:w-1/2 '>Subscribe to our Newsletter to recieve important updates about new products on buyers website</p>
            </div>
            <div className='w-full md:w-auto'>
                <Input inputType='text' value={letterVal} placeholder='Your email address here' inputChange={handleNewsInput} inputClass='border-none py-2 text-black   px-4 my-4 w-full outline-none'/>
                <Button value='Subscribe' btnClass='w-full bg-cyan-600 py-2 px-3 hover:bg-cyan-400 text-white duration-200'/>

            </div>
         </div>
    </section>
  )
}

