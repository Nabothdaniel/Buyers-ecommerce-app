import React,{useState} from 'react'

const Img1 = 'assets/img1.jpg'
const Img2 = 'assets/img2.jpg'
const Img3 = 'assets/img3.jpg'

export const Categories = () => {
  const [category,setCategory] = useState([
    {
      id:1,
      title:'Men',
      body:'Lorem ipsum dolor sit.',
      img:Img1
    },
    {
      id:2,
      title:'Women',
      body:'Lorem ipsum dolor sit.',
      img:Img2
    },
    {
      id:3,
      title:'Children',
      body:'Lorem ipsum dolor sit.',
      img:Img3
    },
    {
      id:4,
      title:'Others',
      body:'Lorem ipsum dolor sit.',
      img:Img2
    },
  ]);



  return (
    <div className='px-4 md:px-24 my-5 bg-slate-50 py-5  shadow-sm'>
      <h1 className='text-center font-bold text-2xl my-3'>Categories</h1>
      <div className="category-cards grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 md:grid-rows-2">
          {
            category.map(singleCate =>(
              <div className={`category-card bg-[url("${singleCate.img}")] bg-center w-full bg-fit bg-no-repeat rounded z-10 shadow-sm relative border border-gray-300 h-[10rem] my-3`} key={singleCate.id}>
            <div className={`absolute bottom-3 py-2 px-3 `}>
              <h1 className='font-semibold'>{singleCate.title}</h1>
             <p>{singleCate.body}</p>
            </div>
        </div>
            ))
          }
        </div>
            
      </div>
  )
}

