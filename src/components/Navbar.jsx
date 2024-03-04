import React from 'react'
import '../css/style.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
        <div className='header'>
           <div className='nav'>
           <NavLink to='/' id='navbar' className='fw-semibold ms-5 text-decoration-none text-black mt-3'>Home</NavLink>
            <NavLink to='/Products'  className='fw-semibold ms-5 text-decoration-none text-black mt-3'>Products</NavLink>
            <NavLink to='/Login'  className='fw-semibold ms-5 text-decoration-none text-black mt-3'>login</NavLink>
            <NavLink to='/Sginup'  className='fw-semibold ms-5 text-decoration-none text-black mt-3'>Singup</NavLink>
            <NavLink to='/AddProducts'  className='fw-semibold ms-5 text-decoration-none text-black mt-3'>AddProducts</NavLink>
           </div>
    </div>
    </div>
  )
}

export default Navbar


// {data.user.isLogin?(<span id='navbar'>{data.user.userdata.username}</span>) : ( <NavLink to='/Singup'  className='fw-semibold'id='navbar'>Singup</NavLink>)}
// {data.user.isLogin?(<span className='fw-semibold'>Logout</span>) : ( <NavLink to='/Login' className='fw-semibold' id='navbar' >Login </NavLink>) }<i class="bi bi-person ms-5 ps-5 fs-5 text-white"></i>
