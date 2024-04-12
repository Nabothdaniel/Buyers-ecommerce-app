import React,{useState} from 'react'
import {BiStar} from 'react-icons/bi'
import {PagesTag} from '../components/PagesTag'

const Contact = () => {
  const [contactCard, setContactCard] = useState([
    {
    city:'Lagos',
    address:'203 Obafemi street shop 12'
    },

    {
    city:'Abuja',
    address:'Wuse zone 5 opposite City estate sho 13'
    },

    {
    city:'Kaduna',
    address:'Narayi Kabala konstien shop 18'
    },
])
  return (
    <div className=''>
      <PagesTag desc='Contact'/>
      <h1 className=' text-black text-2xl font-semibold ml-10 md:ml-20 mt-5'>Get in Touch</h1>
    <div className='my-10 container md:px-24 px-3 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <div className="flex flex-col gap-8 md:gap-12">
           {
            contactCard.map(card =>(
              <div className="border border-gray-200 py-3 px-4 w-full md:w-1/2" key={card.city}>
              <h1 className="text-[1.2rem] font-semibold text-cyan-400">{card.city}</h1>
              <p className='text-gray-500'>{card.address}</p>
            </div>
            ))
           }
          </div>
        </div>
        <div  className='md:w-auto'>
            <form className='flex flex-col  rounded-md border border-gray-300 md:border-none md:bg-gray-100 md:shadow-md py-5 px-3 md:px-5'>
              <div className='flex flex-col  md:flex-row gap-1  w-full md:w-auto md:mx-5'>
               <div className="md:w-1/2 w-full">
                <label htmlFor="firstname" className='self-start'>First Name</label>
               <input type="text" name='firstname' className=' mt-2 w-full md:w-auto p-3 md:px-1 rounded-md outline-none' placeholder='e.g John' />
               </div>
               <div className="md:w-1/2 w-full">
               <label htmlFor="lastname" className='self-start'>Last Name</label>
                <input type="text" name='lastname' className='mt-2 p-3 rounded-md outline-none w-full' placeholder='e.g Doe'/>
                  </div>
              </div>
                <label htmlFor="subject" className='self-start md:ml-10 font-normal'>Subject</label>
              <input type="text" name='subject' className='w-full md:w-[80%] rounded-md p-3 my-2 outline-none' placeholder='subject here...' />

                <label htmlFor="subject" className='self-start md:ml-12 font-normal'>Email</label>
              <input type="text" name='subject' className='w-full md:w-[80%] rounded-md p-3 my-2 outline-none' placeholder='e.g someone@gmail.com' />

              <label htmlFor="message" className='self-start md:ml-12'>Message</label>
            <textarea name="message" id=""  cols="15" rows="5" className='md:w-[80%] w-full rounded-md outline-none p-3 place' placeholder='message here'></textarea>
            <button className='mt-4 p-3 w-full md:w-[80%] rounded-md text-white bg-cyan-700 hover:bg-cyan-500 duration-200'>Send Message</button>
            </form>
        </div>
    </div>
    </div>

  )
}

export default Contact
