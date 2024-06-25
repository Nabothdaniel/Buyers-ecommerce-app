import React from 'react'
import {Services} from '../components/utils/Services'
import  Categories  from "../components/categories/Categories"
import {NewsLetter} from '../components/utils/NewsLetter'
import Banner from '../components/utils/Banner'

export const Home = ()=>{
    return(
    <>
        <Banner/>
        <Services/>
        <Categories/>
        <NewsLetter width='full'/>
    </>
    )
}