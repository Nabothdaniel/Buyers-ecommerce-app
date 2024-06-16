import React from 'react'
import {Services} from '../components/Services'
import  Categories  from "../components/Categories"
import {NewsLetter} from '../components/NewsLetter'
import Banner from '../components/Banner'

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