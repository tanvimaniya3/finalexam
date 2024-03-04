import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { singup } from '../Redux/Action';
import '../css/style.css'

function Sginup() {

  let[username,setUsername]=useState("");
  let [email,setEmail]=useState("");
  let[password,setPassword]=useState("");
  let dispatch = useDispatch();

  const handalSignup=async(userdata)=>{
    let user = await axios.post("http://localhost:8899/user",userdata);
    console.log(userdata)
    dispatch(singup(userdata))
  }

 const handalSubmit =(e)=>{
  e.preventDefault();  let user ={
    username:username,
    email:email,
    password:password,
  };
  handalSignup(user);
 }

  return (
    <div className="p-5" >
     <form onSubmit={handalSubmit} className="p-5 form">
       <h2 className='text-center mb-4'>Sing Up</h2>
      <input type='text'  placeholder=' Enter Your Name'  className='ps-4 pt-1 pb-1 pe-5 i-from' value={username} onChange={(e)=>setUsername(e.target.value)}/><br></br>
      <input type='Email' placeholder='Enter Your Email' className='mt-4 ps-4 pt-1 pb-1 pe-5 i-from' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
      <input type='Password' placeholder='Enter Your Password' className='mt-4 ps-4 pt-1 pb-1 pe-5 i-from' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
      <button className='mt-4 ps-4 pt-1 pb-1 pe-4 i-fromm border-black'>Sign Up</button>
    
     </form>
    </div>
  )
}

export default Sginup
