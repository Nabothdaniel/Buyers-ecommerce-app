import React from 'react'
import { HeroSection } from "../components/HeroSection"
import {Services} from '../components/Services'
import { Categories } from "../components/Categories"
import {NewsLetter} from '../components/NewsLetter'

export const Home = ()=>{
    return(
    <>
        <HeroSection/>
        <Services/>
        <Categories/>
        <NewsLetter/>
    </>
    )
}