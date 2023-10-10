import { JOBS_FAILED, JOBS_REQUEST, JOBS_SUCCESS } from "./actionType"

const init={
    isLoading:false,
    isError:false,
    JobsData:[]
}

export const reducer=(state=init, {type,payload})=>{
    switch(type){
        case JOBS_REQUEST:return {
            isLoading:true,
            isError:false,
        }
        case JOBS_SUCCESS:return {
            isLoading:false,
            isError:false,
            JobsData:payload
        }
        case JOBS_FAILED:return {
            isLoading:false,
            isError:true,
        }

        default:
            return state
            
    }

}


