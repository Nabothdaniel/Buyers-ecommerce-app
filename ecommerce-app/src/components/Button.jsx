import React from "react";
import { Link } from "react-router-dom";

export const Button = ({path,value,width})=>{
    console.log('the width is',width)
    return <button className={`btn hover:bg-cyan-400 "w-${width}" duration-200`}><Link to={path}>{value}</Link></button>;
}