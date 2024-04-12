import React from "react";
import { Link } from "react-router-dom";

export const Button = ({path,value,btnClass})=>{

    return <button className={btnClass}><Link to={path}>{value}</Link></button>;
}