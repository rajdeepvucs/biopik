import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props:any) {
    const {Component}= props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem('login');
        if(!login){
            navigate('/');
        }
    })
  return (
    <div><Component/></div>
  )
}
