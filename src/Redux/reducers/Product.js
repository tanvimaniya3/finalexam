import { ADDPRODUCTS, GETPRODUCT } from "../ActonType";

let initialState={
    products:[],
    
};


export const products = (state=initialState,{type,payload})=>{
    switch (type){
        case ADDPRODUCTS:
            return{
                ...state,
                products:[...state.products,payload],
            };
            case GETPRODUCT:
                return{
                    ...state,
                    products:payload,
                }
                default:
                    return state;
    }
}