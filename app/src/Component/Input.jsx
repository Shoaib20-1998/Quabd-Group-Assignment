// Input.js
import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;

  justify-content: center;
  height: 30vh;
  width:50%;
  margin:10px auto;
  padding: 20px;
  background-color: #f0f0f0;
`;

const InputBox = styled.div`
  background-color: #ffffff;
  padding: 20px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: none;
  border-bottom: 2px solid #2C5282;
  font-size: 20px;
  outline: none;
  width: 100%;
  margin: 20px auto;
`;

const SearchButton = styled.button`
  padding: 12px 20px;
  background-color: #2C5282;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #064a93;
  }
`;

const Input = ({ value, onChange, onSubmit }) => {



  return (
    <InputContainer>
      <InputBox>
        <StyledInput
          type="text"
          placeholder="Enter a programming language (e.g., JavaScript, Python)"
          value={value}
          onChange={onChange}
        />
        <SearchButton onClick={onSubmit}>Search Jobs</SearchButton>
      </InputBox>
    </InputContainer>
  );
};

export default Input;
