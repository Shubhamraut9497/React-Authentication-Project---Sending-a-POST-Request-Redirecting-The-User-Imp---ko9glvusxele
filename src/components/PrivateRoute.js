import React from 'react';
import { useNavigate } from "react-router-dom";

const PrivateRoute=(props)=>{
    const navigate=useNavigate();
   if(!window.localStorage.getItem("username") && !window.localStorage.getItem("password")){
     navigate('/login')
   }
   else{
    
    return (
        <>{props.children}</>
    )
   }
}
export default PrivateRoute;