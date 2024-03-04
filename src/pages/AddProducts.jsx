import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProducts } from '../Redux/Action'

function AddProducts() {

    let [title,setTitale]=useState()
    let[img,setImg]=useState()
    let [price,setPrice]=useState()
    let dispatch=useDispatch();

    const handelSubmit = (e)=>{
        e.preventDefault();

        let data ={
            title:title,
            img:img,
            price:price,
        };
        dispatch(addProducts(data));
        console.log(data);
    }

  return (
    <div className='mt-5 pt-5 p-5' id='login-img'>
      <form onSubmit={handelSubmit}>
        <input type='text' placeholder='title' value={title} onChange={(e) =>setTitale(e.target.value)}></input>
        <input type='url' placeholder='img' value={img} onChange={(e)=>setImg(e.target.value)}></input>
        <input type='number' placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddProducts
