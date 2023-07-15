import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../components/common/Button";
import useNavigation from "../hooks/useNavigation";

const Create = () => {
  const { goToPath, goBack } = useNavigation();
  const [review, setReview] = useState({ title: "", star: "0", content: "" });

  const onChangeHandler = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmit = (e) => {
    if (
      review.title.trim().length === 0 ||
      review.content.trim().length === 0 ||
      review.star === "0"
    ) {
      alert("모든 내용을 작성해주세요.");
    } else if (
      review.title.trim().length > 25 ||
      review.content.trim().length > 200
    ) {
      alert("제목은 25자 이하, 본문은 200자 이하로 작성해주세요");
      console.log(review.title.length);
    } else {
      goToPath("/");
    }
  };

  return (
    <CreateWrap>
      <CreateContainer>
        <h1>작성하기</h1>
        <CreateBody>
          <CreateInput>
            <input
              onChange={onChangeHandler}
              type="text"
              placeholder="제목을 입력해주세요."
              name="title"
            />
          </CreateInput>
          <CreateSelect>
            <select onChange={onChangeHandler} name="star">
              {Array(6)
                .fill()
                .map((_, index) => (
                  <option key={index} value={index}>
                    {index === 0 ? "별점을 선택해주세요." : "⭐".repeat(index)}
                  </option>
                ))}
            </select>
          </CreateSelect>
        </CreateBody>
        <CreateTextArea>
          <textarea
            onChange={onChangeHandler}
            placeholder="내용을 입력해주세요."
            name="content"
          ></textarea>
        </CreateTextArea>
        <CreateButton>
          <Button onClick={goBack} color={"white"} size={"medium"}>
            목록
          </Button>
          <Button onClick={onClickSubmit} color={"black"} size={"medium"}>
            작성
          </Button>
        </CreateButton>
      </CreateContainer>
    </CreateWrap>
  );
};

export default Create;

const CreateWrap = styled.form`
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
    margin-top: 2rem;
  }
`;

const CreateBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

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
`;
const CreateSelect = styled.div`
  width: 35rem;
  display: flex;
  select {
    border: 1px solid rgb(221, 221, 221);
    height: 2.8rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 1rem;
    color: rgb(133, 133, 133);
    padding-left: 0.5rem;
  }
`;

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
  textarea::placeholder {
    font-family: sans-serif;
    color: rgb(133, 133, 133);
  }
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 19rem;
`;
