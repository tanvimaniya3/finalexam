import { LOGIN, SIGNUP } from "../ActonType";


let initialstate = {

    userdata:{},
    isLogin:false,
};

export const User = (state = initialstate,{type,payload})=>{

    switch(type){
        case SIGNUP:
            return{
                ...state,
                userdata:payload,
                isLogin:true
            }
            case LOGIN:
                return{
                    ...state,
                    userdata:payload,
                    isLogin:true
                }

                    default:
                        return state;
    }
}