import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
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
  const navigate=useNavigate()
  return (
    <SuccessContainer>
    <SuccessCard>
      <SuccessTitle>Application Submitted Successfully!</SuccessTitle>
      <SuccessText>Your application has been received and is under review.</SuccessText>
      <BackButton onClick={() => navigate('/')}>Back to Job Listing</BackButton>
    </SuccessCard>
  </SuccessContainer>
  )
}

export default Success