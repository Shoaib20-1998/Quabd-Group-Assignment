import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JobListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
`;

const JobCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const SalaryText = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const ContractTime = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;
function Jobs() {

  const {isLoading,JobsData} = useSelector((state)=>state.jobsData)


  if(isLoading){
    return <h1>Loading jobs.....</h1>
  }

  return (
    <JobListContainer>
      {JobsData?.map((job) => (
        <Link to={`/jobs/${job.id}`} key={job.id}>
        <JobCard >
          <JobTitle>{job.title}</JobTitle>
          <SalaryText>Salary Range: ${job.salary_min} - ${job.salary_max}</SalaryText>
          <ContractTime>Contract Time: {job.contract_time?job.contract_time:"Part Time"}</ContractTime>
        </JobCard>
        </Link>
      ))}
    </JobListContainer>

  )
}

export default Jobs