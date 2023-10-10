import { AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"

const init={
    isLoading:false,
    isError:false,
    isAuth:false,
    username:""
}

export const reducer=(state=init, {type,payload})=>{

    switch(type){
        case AUTH_REQUEST:return {
            isLoading:true,
            isError:false,
            isAuth:false
        }
        case AUTH_SUCCESS:return {
            isLoading:false,
            isError:false,
            isAuth:true,
            username:payload       
        }
        case AUTH_FAILED:return {
            isLoading:false,
            isError:true,
            isAuth:false,
        }

        default:
            return state
            
    }

}

