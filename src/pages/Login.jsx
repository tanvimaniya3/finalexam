import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Action';

function Login() {

  
    let [email,setEmail]=useState("");
    let[password,setPassword]=useState("");
    let dispatch = useDispatch();
  
    const handalLogin=async(email,password)=>{
      console.log(email,password);
      let user = await axios.get(`http://localhost:8899/user?email=${email}&password=${password}`);
      console.log(...user.data)
      
      if(user.data[0]){
        dispatch(login(...user.data))
      }
    }
  
   const handalSubmit =(e)=>{
    e.preventDefault();
    handalLogin(email,password);
    setEmail("")
    setPassword("")
   }
  return (
    <div>
      <form onSubmit={handalSubmit} className="p-5 form">
    <h2 className='text-center mb-4'>Login</h2>
   <input type='Email' placeholder='Enter Your Email'  className='ps-4 pt-1 pb-1 pe-5 i-from' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
   <input type='Password' placeholder='Enter Your Password'  className='ps-4 pt-1 pb-1 pe-5 mt-4 i-from' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
   <button className='mt-4 ps-4 pt-1 pb-1 pe-4 i-fromm border-black'>Submit</button>
  </form>
    </div>
  )
}

export default Login
