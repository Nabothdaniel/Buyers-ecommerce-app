import React from 'react'
import {Services} from '../components/utils/Services'
import {NewsLetter} from '../components/utils/NewsLetter'
import Banner from '../components/utils/Banner'
import CategorySwipper from '../components/categories/CategorySwipper'

export const Home = ()=>{
    return(
    <>
        <Banner/>
        <Services/>
        <CategorySwipper/>
        <NewsLetter width='full'/>
    </>
    )
}