
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

const JobDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;

`;

const JobCard = styled.div`
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  max-width: 80%;
  
`;

const JobTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const JobCategory = styled.p`
  font-size: 18px;
`;

const JobCompany = styled.p`
  font-size: 16px;
`;

const JobContractType = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const JobDescription = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const JobLocation = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const JobSalary = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;


function Singlejob() {
  const[job,setSingleJob]=useState()
  const { isAuth }= useSelector((state)=>state.Auth)
  let {jobId}  = useParams();
  const FetchSingleJob=()=>{
    axios.get(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=869e42fd&app_key=99c39364812e7279f7060aa8f1331cde&what=${jobId}`)
    .then((res)=>setSingleJob(res.data?.results[0]))
  }

  useEffect(()=>{
    FetchSingleJob()
  },[])

  const Handleclick=()=>{
    if(isAuth){
      localStorage.setItem('job',JSON.stringify(job))
    }
  }
  

  return (
    <JobDetailsContainer>
    <JobCard>
      <JobTitle>{job?.title}</JobTitle>
      <JobCategory>Category: {job?.category.label}</JobCategory>
      <JobCompany>Company: {job?.company.display_name}</JobCompany>
      <JobContractType>Contract Time: {job?.contract_time}</JobContractType>
      <JobContractType>Contract Type: {job?.contract_type}</JobContractType>
      <JobDescription>Description: {job?.description}</JobDescription>
      <JobLocation>
        Location: {job?.location.display_name}, {job?.location.area[2]}, {job?.location.area[3]}
      </JobLocation>
      <JobSalary>
        Salary Range: ${job?.salary_min.toFixed(2)} - ${job?.salary_max.toFixed(2)}
      </JobSalary>
     <Link to={`/apply/${job?.id}`}> <ApplyButton onClick={Handleclick}>Apply Now</ApplyButton></Link> 
    </JobCard>
  </JobDetailsContainer>
  )
}


export default Singlejob
const ApplyButton = styled.button`
  background-color: #2C5282;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #084b92;
  }
`;