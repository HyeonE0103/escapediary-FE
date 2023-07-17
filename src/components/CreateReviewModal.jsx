import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./common/Button";
import useNavigation from "../hooks/useNavigation";
import axios from "axios";
import Input from "./common/Input";

const CreateReviewModal = ( {openModalHandler} ) => {
  const { goToPath, goBack } = useNavigation();
  const [review, setReview] = useState({ title: "", star: "0", content: "" });

  const onChangeHandler = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (review.title.trim().length > 25 || review.content.trim().length > 200) {
      alert("제목은 25자 이하, 본문은 200자 이하로 작성해주세요");
    } else {
      const api = process.env.REACT_APP_URL;
      axios
        .post(api, {
          title: review.title,
          star: review.star,
          content: review.content,
        })
        .then((response) => openModalHandler())
        .catch((error) => console.log(error));
    }
  };

  return (
    <CreateWrap onSubmit={onClickSubmit}>
      <CreateDiv></CreateDiv>
      <CreateContainer>
        <h1>작성하기</h1>
        <CreateBody>
          <CreateInput>
            <Input
              required
              onChange={onChangeHandler}
              type="text"
              placeHolderText="제목을 입력해주세요."
              name="title"
              value={review.value}
            />
          </CreateInput>
          <CreateSelect>
            <select
              onChange={onChangeHandler}
              name="star"
              value={review.star}
              required
            >
              {Array(6)
                .fill()
                .map((_, index) => (
                  <option key={index} value={index === 0 ? "" : index}>
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
            value={review.content}
            required
          ></textarea>
        </CreateTextArea>
        <CreateButton>
          <Button onClick={openModalHandler} color={"white"} size={"small"}>
            닫기
          </Button>
          <Button type="submit" color={"black"} size={"small"}>
            작성
          </Button>
        </CreateButton>
      </CreateContainer>
    </CreateWrap>
  );
};

export default CreateReviewModal;

const CreateWrap = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateDiv = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

const CreateContainer = styled.div`
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  width: 80%;
  height: 100%;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
  }
  padding: 0 2rem;
  box-sizing: border-box;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
  }
`;

const CreateBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4.5rem;
  margin-bottom: 1.5rem;
`;

const CreateInput = styled.div`
  width: 70vw;
  display: flex;
  margin: 0 auto;
`;
const CreateSelect = styled.div`
  width: 70vw;
  display: flex;
  margin: 0 auto;
  select {
    border: 1px solid rgb(221, 221, 221);
    height: 2.8rem;
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-radius: 0.5rem;
    color: rgb(133, 133, 133);
    padding-left: 0.5rem;
  }
`;

const CreateTextArea = styled.div`
  width: 70vw;
  height: 50%;
  display: flex;
  margin: 0 auto;
  textarea {
    border: 1px solid rgb(221, 221, 221);
    width: 100%;
    outline: none;
    border-radius: 0.5rem;
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
  margin-top: auto;
  margin-bottom: auto;
  gap: 1rem;
`;