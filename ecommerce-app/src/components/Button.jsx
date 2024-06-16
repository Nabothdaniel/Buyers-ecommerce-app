import React from "react";
import { Link } from "react-router-dom";

 const Button = ({path,value,btnClass,Icon})=>{

    return <button className={btnClass}><Link to={path}>{value}</Link></button>;
}

export default Button;