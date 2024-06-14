import React from "react";
import ShoeImg from '../assets/banner2.png'
import { Button } from "./Button";

export const HeroSection = () => {
    return (
        <section className="hero bg-gray-200">
            <div className=" flex flex-col md:flex-row-reverse justify-between md:px-16 px-5  items-center gap-12">
                <div className="h-96 w-[30rem]">
                    <img src={ShoeImg} alt=" person wearing a pair of sneakers with white socks and black trousers" className=" object-contain" />
                </div>
                <div className="hero-right md:ml-5">
                    <h1 className="text-2xl font-bold">Find Your Perfect Product</h1>
                    <p className="md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, exercitationem. Perferendis, quisquam repellat! Exercitationem, ipsa!</p>
                    <Button path='/shop' value='Shop Now' btnClass='w-auto btn hover:bg-cyan-400  duration-200' />
                </div>
            </div>
        </section>
    )
}