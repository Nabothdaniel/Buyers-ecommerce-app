import React,{useState,useEffect} from 'react'

import Card from '../card/Card';


const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts=()=>{
            fetch('./products.json')
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                setProducts(data)
            })
        }
        fetchProducts();
    },[])
  return (
    <div className='flex flex-col gap-5 md:flex-row flex-wrap justify-between items-center space-y-3 mb-3 '>
      {
        products.map(product =>(<Card key={product.id} product={product}/>))
      }
    </div>
  )
}

export default Products
