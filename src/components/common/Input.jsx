import React from "react";
import { styled } from "styled-components";

const Input = ({ labelText, placeHolderText, name, value, onChange }) => {
  return (
    <InputWrap>
      <label>{labelText}</label>
      <input
        placeholder={placeHolderText}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  label {
    font-weight: bold;
    font-size: 1.2rem;
  }
  input {
    border: 1px solid rgb(221, 221, 221);
    height: 2.8rem;
    width: 100%;
    outline: none;
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
  }
`;
export default Input;
