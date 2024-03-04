
import { Getproducts, delet } from '../Redux/Action';
 import React, { useEffect } from 'react'
 import { useDispatch, useSelector } from 'react-redux'


function Products() {


   let product = useSelector((store)=>store.data);  
   let dispatch= useDispatch();
   useEffect(()=>{
    
           dispatch(Getproducts());
   },[]);

   const handleRemove =(id)=>{
    dispatch(delet(id))
   }

   console.log(product);
   return (
     <div>
       {product.products.map((ele)=>{
         return(
           <div>
            <img src={ele.img}></img>
             <h1>{ele.title}</h1>
            <h3>{ele.price}</h3>
            <button onClick={()=>handleRemove(ele.id)}>delet</button>
           
           </div>      
           
           )
       })}
     </div>
   )
 }

 export default Products
