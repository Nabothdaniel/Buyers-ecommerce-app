import React from 'react'
import { PagesTag } from '../components/PagesTag'
import AboutImg from '../assets/img3.jpg'
import TeamImg1 from '../assets/Pedro.jpg'
import TeamImg2 from '../assets/Trovalds.jpg'



export const About = () => {
  const card = [
    {
      img: TeamImg1,
      name: 'Elizabeth Monday',
      title: 'CEO/CO',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam cumque rem eligendi animi et sapiente!'
    },
    {
      img: TeamImg2,
      name: 'John Kevin',
      title: 'MD/EXECUTIVE',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam cumque rem eligendi animi et sapiente!'
    },
    {
      img: AboutImg,
      name: 'Adams Gold',
      title: 'GMD',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam cumque rem eligendi animi et sapiente!'
    },
  ]
  return (
    <div>
      <PagesTag desc='About' />
      <div className="mt-5">
        <div className=" grid grid-cols-1 md:grid-cols-2 py-2 md:px-24 px-5 gap-5">
          <div className="md:w-full w-auto h-auto md:h-full">
            <img src={AboutImg} className='object-contain bg-position md:object-cover  w-[100%] h-full md:h-[60%]' alt=" picture of davido wearing a blue suit" sizes="" srcset="" />
          </div>
          <div className=''>
            <h1 className=" text-2xl font-semibold ml-2 md:ml-10">How We started</h1>
            <p className=' md:px-16 px-auto py-5'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et adipisci natus? Voluptatum, ab reprehenderit in dolorem animi error, velit repellat ducimus voluptatibus cupiditate.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et adipisci natus? Voluptatum, ab reprehenderit in dolorem animi error, velit repellat ducimus voluptatibus cupiditate.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et adipisci natus? Voluptatum, ab reprehenderit in dolorem animi error, velit repellat ducimus voluptatibus cupiditate.
            </p>

            <p className=' mt-2 md:px-16 px-auto py-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates et adipisci natus? Voluptatum, ab inventore nostrum, sint ullam laboriosam sunt dolorum ex consequatur consectetur distinctio saepe doloremque perspiciatis ea omnis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab iusto .
            </p>
          </div>
        </div>
        <hr className='text-gray-700' />
        <div className='my-10 '>
          <h1 className="font-semibold text-black text-center text-[1.5rem]">The Team</h1>
          <div>
            <div className="flex flex-col md:flex-row gap-5 my-5">
              {
                card.map((item) => (
                  <div className=' shadow-sm rounded-sm text-center px-10 py-10 my-5 md:m-0 mx-10 md:mx-20' key={item.name}>
                    <img src={item.img} className='h-20 w-20 rounded-full object-cover mx-auto' alt="a guy and a girl both standing before a huge white banner" />
                    <h1 className="text-black text-center my-2 font-semibold">{item.name}</h1>
                    <span className="text-gray-400 ">{item.title}</span>
                    <p className='mt-3 text-black'>{item.text}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
