import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import styled from '@emotion/styled'
import Input from '../Component/Input';
import axios from 'axios'
import Jobs from './Jobs';
import { useDispatch, useSelector } from 'react-redux';
import { FetchJobsData } from '../Redux/Jobsdata/action';
function Home() {
  const [language, setLanguage] = useState('');
  const dispatch=useDispatch() 
  const {isAuth} =useSelector((state)=>state.Auth)
  const handleSearch = () => {
    if (language) {    
      dispatch(FetchJobsData(language))  
      setLanguage('')
    } else {
      alert('please write a language')
    }
  };
 



  return (
    <DIV>
      <h1 >Welcome to the Job Search Portal</h1>
      <Input value={language} onChange={(e) => setLanguage(e.target.value)} onSubmit={handleSearch} />
      <Jobs />

    </DIV>
  )
}


const DIV = styled.div`
 
    h1{
      text-align:center;
      color:#2C5282;
      margin: 20px auto;
    }
  `

export default Home


