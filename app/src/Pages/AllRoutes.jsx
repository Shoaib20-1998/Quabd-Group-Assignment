import  { Routes, Route } from 'react-router-dom'



import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Home from './HomePage'
import Jobs from './Jobs'
import Singlejob from './Singlejob'
import Jobapply from './Jobapply'
import Success from './Success'
import PrivateRoutes from '../PrivateRoute/PrivateRoutes'

function AllRoutes() {
  return (
    <>
    <Routes> 
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/jobs/:jobId' element={<Singlejob />}/>
        <Route path='/apply/:jobId' element={<PrivateRoutes><Jobapply /></PrivateRoutes>}/>
        <Route path='/success' element={<PrivateRoutes><Success /></PrivateRoutes>}/>
    </Routes>
    </>
  )
}

export default AllRoutes