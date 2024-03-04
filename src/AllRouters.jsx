import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Sginup from './pages/Sginup'
import AddProducts from './pages/AddProducts'



function AllRouters() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/sginup' element={<Sginup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/AddProducts' element={<AddProducts/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRouters
