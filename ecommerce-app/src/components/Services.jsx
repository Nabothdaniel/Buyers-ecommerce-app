import React,{useState} from 'react'
import {BiCart,BiShield,BiRefresh,BiTag} from 'react-icons/bi'

export const Services = () => {
    const [cards,setCards] = useState([
        {
            id:1,
            icon:<BiCart className='icon-color w-6 h-6 mb-2'/>,
            title:'Free Delivery',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.'
        },
        {
            id:2,
            icon:<BiTag className='icon-color w-6 h-6 mb-2'/>,
            title:'Quality Guarantee',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.'
        },
        {
            id:3,
            icon:<BiRefresh className='icon-color w-6 h-6 mb-2'/>,
            title:'Daily Offers',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.'
        },
        {
            id:4,
            icon:<BiShield className='icon-color w-6 h-6 mb-2'/>,
            title:'100% Secure Payement',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.'
        },
    ])
  return (
    <div className='services'>
      <div className="services-inner">
      <h1 className="text-center text-2xl font-bold my-7">Services</h1>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-5 mx-5 md:mx-16 my-5">
          {
            cards.map(card =>(
                <div className="border border-cyan-300  rounded-sm py-2 px-3" key={card.id}>
                  {card.icon}
                  <h3 className='card-title font-bold'>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
