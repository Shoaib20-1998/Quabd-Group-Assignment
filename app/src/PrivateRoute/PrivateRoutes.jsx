import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoutes({ children }) {
    let username=localStorage.getItem('username')
    const location = useLocation()    
    const { isAuth }=useSelector((state)=> state.Auth)
    console.log(isAuth)
    if(!isAuth ){
        alert('Please Login First')
        return <Navigate to={'/login'} state={location.pathname} />
    }

    return children

}

export default PrivateRoutes