
import { Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const FormCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  width: 500px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  background-color: #2C5282;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Jobapply() {
  const init={
    name:"",
    email:"",
    cover:"",
    resume:""
  }
  const [spinner, setspinner] = useState(false)
  const [submitdata,setsubmitdata]=useState(init)
  const navigate=useNavigate()
  const handlesubmit = () => {
    if(submitdata.name==""||submitdata.email==""||submitdata.cover==""||submitdata.resume==""){
      alert('Please Fill All the details')
    }else{
      setspinner(true)
      setTimeout(() => {
        navigate('/success')
      }, 3000);
    }
    
  }

  const handlechange=(e)=>{
    const{name,value}=e.target
    setsubmitdata({...submitdata,[name]:value})
    
  }

  console.log(submitdata)
  return (
    <FormContainer>
      <FormCard>
        <FormTitle>Apply for the Job</FormTitle>
        <form>
          <div>
            <FormLabel>Name:</FormLabel>
            <FormInput value={submitdata.name} name='name' onChange={handlechange} type="text" placeholder="Enter your name" required />
          </div>
          <div>
            <FormLabel>Email:</FormLabel>
            <FormInput value={submitdata.email} name='email' onChange={handlechange} type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <FormLabel>Cover Letter Note:</FormLabel>
            <FormTextarea
              rows="4"
              placeholder="Write your cover letter here"
              required
              value={submitdata.cover} name="cover"onChange={handlechange}
            />
          </div>
          <div>
            <FormLabel>Upload Resume:</FormLabel>
            <FormInput value={submitdata.resume} name='resume' onChange={handlechange} type="file" accept=".pdf,.doc,.docx" required />
          </div>
          <FormButton onClick={handlesubmit}>
            {spinner ?<Spinner color='white' />:"Submit"}</FormButton>
        </form>
      </FormCard>
    </FormContainer>
  )
}

export default Jobapply