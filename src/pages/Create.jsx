import React from 'react';
import { styled } from "styled-components";
import Button from "../components/common/Button";

const Create = () => {

  const starOptions = [];
  for (let i = 0; i <= 5; i++) {
    starOptions.push(<option key={i}>{i == 0 ? '별점을 선택해주세요.' : '⭐'.repeat(i)}</option>);
  }

  return (
    <CreateWrap>
      <CreateContainer>
        <h1>작성하기</h1>
        <CreateBody>
          <CreateInput>
            <input type='text' placeholder='제목을 입력해주세요.' />
          </CreateInput>
          <CreateSelect>
            <select>
              {starOptions}
            </select>
          </CreateSelect>
        </CreateBody>
        <CreateTextArea>
          <textarea placeholder='내용을 입력해주세요.'></textarea>
        </CreateTextArea>
        <CreateButton>
          <Button color={"black"} size={"medium"}>작성</Button>
        </CreateButton>
      </CreateContainer>
    </CreateWrap>
  )
}

export default Create;

const CreateWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateContainer = styled.div`
  width: 40rem;
  height: 50rem;
  margin: auto;
  position: relative;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d8d8d8;
  padding: 0 2rem;
  box-sizing: border-box;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`

const CreateBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
`

const CreateInput = styled.div`
  width: 35rem;
  display: flex;
  input {
    border: 1px solid rgb(221, 221, 221);
    height: 2.8rem;
    width: 100%;
    outline: none;
    border-radius: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  } 
`
const CreateSelect = styled.div`
  width: 35rem;
  display: flex;
  select {
    border: 1px solid rgb(221, 221, 221);
    height: 2.8rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 1rem;
  }
`

const CreateTextArea = styled.div`
  width: 35rem;
  display: flex;
  textarea {
    border: 1px solid rgb(221, 221, 221);
    height: 22rem;
    width: 100%;
    outline: none;
    border-radius: 1rem;
    padding: 1rem;
  }
`

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;