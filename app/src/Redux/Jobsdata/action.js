import { JOBS_FAILED, JOBS_REQUEST, JOBS_SUCCESS } from "./actionType"
import axios from 'axios'

export const FetchJobsData=(language)=>async(dispatch)=>{
    let API_KEY = process.env.REACT_APP_API_KEY
    let API_ID = process.env.REACT_APP_APPLICATION_ID
    try {
        dispatch({type:JOBS_REQUEST}) 
        axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${API_ID}&app_key=${API_KEY}&results_per_page=10&title_only=${language}`)
        .then((res) => {
          dispatch({type:JOBS_SUCCESS,payload:res.data.results}) 
        })
    } catch (error) {
        dispatch({type:JOBS_FAILED}) 
        
    }

}




