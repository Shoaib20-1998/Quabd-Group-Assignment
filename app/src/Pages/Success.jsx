import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`;

const SuccessCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
`;

const SuccessTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #28a745; /* Green color for success */
`;

const SuccessText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background-color: #2C5282;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0f4782;
  }
`;

function Success() {
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('job'))
  return (
    <>
     <Container>
      <Header>
        <h1>Application Submitted Successfully!</h1>
        <p>Here are your applied jobs:</p>
      </Header>
      <AppliedJobsList>
        
          <AppliedJobItem >
            <JobTitle>{data?.title}</JobTitle>
             <Company>{data?.company?.display_name}</Company>
            <DateApplied>Applied on {data?.created}</DateApplied> 
          </AppliedJobItem>
      
      </AppliedJobsList>
    </Container>
      <SuccessContainer>
        <SuccessCard>
          <SuccessTitle>Application Submitted Successfully!</SuccessTitle>
          <SuccessText>Your application has been received and is under review.</SuccessText>
          <BackButton onClick={() => navigate('/')}>Back to Job Listing</BackButton>
        </SuccessCard>
      </SuccessContainer>
    </>
  )
}

export default Success


const Container = styled.div`
  padding: 20px;
  text-align: center;
  width:400px;
  margin: auto;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const AppliedJobsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AppliedJobItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const JobTitle = styled.h2`
  margin: 0;
`;

const Company = styled.p`
  margin: 0;
  color: #555;
`;

const DateApplied = styled.p`
  margin: 0;
  color: #888;
`;