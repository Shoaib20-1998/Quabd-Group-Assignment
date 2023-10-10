import { AUTH_FAILED, AUTH_SUCCESS } from "./actionType"

export const AuthenticatonSuccess = (name) =>  (dispatch) => {   
        dispatch({type:AUTH_SUCCESS,payload:name})
}

export const AuthenticatonFailed = () =>  (dispatch) => {   
        dispatch({type:AUTH_FAILED})
  
}
