
import axios from "axios";
import { ADDPRODUCTS, DELET, GETPRODUCT, LOGIN, SIGNUP } from "./ActonType";

export const singup= (data)=>{

    console.log(data);
        return{
          type:SIGNUP,
          payload:data
        }
  }
  export const login= (data)=>{
      return{
        type:LOGIN,
        payload:data
      }
  }
  export const addProducts=(data)=>async(dispatch)=>{
    let products = await axios.post("http://localhost:8899/products", data)

    dispatch({
        type:ADDPRODUCTS,
        payload:products.data
    })
}
export const Getproducts =()=>async(dispatch)=>{


  let res= await axios.get ("http://localhost:8899/products");
  dispatch({

    type:GETPRODUCT,
    payload:res.data,
  });
};
export const delet = (id)=> async(dispatch)=>{
  let res = await axios.delete(`http://localhost:8899/products/${id}`);
  dispatch({
      type:DELET,
      payload:id
  })
}