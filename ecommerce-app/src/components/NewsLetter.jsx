import React,{useState} from'react'
import { Button } from './Button';

export const NewsLetter = () => {
    const [letterVal,setLetterVal] = useState('');
    const handleNewsInput = (val)=>{
       const response = setLetterVal(val);
        console.log(response);

    }
  return (
    <section className='md:px-24 px-5 md:py-16 py-4  bg-black text-white'>
         <div className="mt-3 flex flex-col md:flex-row items-center justify-between ">
            <div className="">
                <h1 className="text-3xl">Subscribe Us Now</h1>
                <p className='md:w-1/2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est nihil optio hic quidem accusantium ad ducimus porro expedita dolor.</p>
            </div>
            <div className='w-full md:w-auto'>
                <input type="text" value={letterVal} onChange={(e)=> handleNewsInput(e.target.value)} className=' border-none py-2   px-0 md:px-3 my-2 w-full' />
                <Button value='Subscribe' width='full'/>

            </div>
         </div>
    </section>
  )
}

