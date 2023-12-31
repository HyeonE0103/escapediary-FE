import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Button from "./common/Button";
import axios from "axios";
import Input from "./common/Input";
import { useParams } from "react-router-dom";

const CreateReviewModal = ({ openModalHandler }) => {
  const [review, setReview] = useState({
    title: "",
    roomname: "",
    star: "",
    content: "",
  });
  const [data, setData] = useState(null);
  const postId = useParams();

  useEffect(() => {
    const api = async () => {
      const url = process.env.REACT_APP_URL + `posts/${postId.postid}`;
      try {
        const { data } = await axios.get(url);
        setData(data.post);
        setReview(data.post);
      } catch (e) {
        console.log(e);
      }
    };
    api();
  }, [postId]);

  const onChangeHandler = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (
      review.title.trim().length > 25 ||
      review.roomname.trim().length > 25 ||
      review.content.trim().length > 500
    ) {
      alert(
        "제목과 방탈출 테마는 25자 이하, 본문은 500자 이하로 작성해주세요."
      );
    } else {
      const api =
        process.env.REACT_APP_URL + (data ? `posts/${postId.postid}` : "posts");
      const method = data ? "put" : "post";
      axios[method](
        api,
        {
          title: review.title,
          roomname: review.roomname,
          star: review.star,
          content: review.content,
        },
        { withCredentials: true }
      )
        // eslint-disable-next-line no-restricted-globals
        .then((response) => location.reload())
        .catch((error) => alert("잘못 작성하셨습니다 다시 확인해 주세요"));
    }
  };

  return (
    <CreateWrap onSubmit={onClickSubmit}>
      <CreateDiv></CreateDiv>
      <CreateContainer>
        <h1>{data ? "수정하기" : "작성하기"}</h1>
        <CreateBody>
          <CreateInput>
            <Input
              required
              onChange={onChangeHandler}
              type="text"
              placeHolderText="제목을 입력해주세요."
              name="title"
              value={review.title}
            />
            <ContentLength
              length={review.title.length}
              limit={25}
              className="contentLength"
            >
              {review.title.length}/25
            </ContentLength>
          </CreateInput>
          <CreateInput>
            <Input
              required
              onChange={onChangeHandler}
              type="text"
              placeHolderText="방탈출 테마를 입력해주세요."
              name="roomname"
              value={review.roomname}
            />
            <ContentLength
              length={review.roomname.length}
              limit={25}
              className="contentLength"
            >
              {review.roomname.length}/25
            </ContentLength>
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
          <ContentLength
            length={review.content.length}
            limit={500}
            className="contentLength"
          >
            {review.content.length}/500
          </ContentLength>
        </CreateTextArea>
        <CreateButton>
          <Button onClick={openModalHandler} color={"white"} size={"small"}>
            닫기
          </Button>
          <Button type="submit" color={"black"} size={"small"}>
            {data ? "수정" : "작성"}
          </Button>
        </CreateButton>
      </CreateContainer>
    </CreateWrap>
  );
};

export default CreateReviewModal;

const CreateWrap = styled.form`
  display: flex;
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
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  width: 60%;
  height: 90%;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60%;
  }
  @media (max-width: 480px) {
    width: 70%;
    height: 70%;
  }
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  h1 {
    font-size: 2rem;
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
    font-weight: bold;
    margin-top: 2rem;
  }
`;

const CreateBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const CreateInput = styled.div`
  width: 48vw;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;
const CreateSelect = styled.div`
  width: 48vw;
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
  width: 48vw;
  height: 40%;
  @media (max-width: 480px) {
    height: 30%;
  }
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  textarea {
    border: 1px solid rgb(221, 221, 221);
    outline: none;
    border-radius: 0.5rem;
    padding: 1rem;
    flex: 1;
  }
  textarea::placeholder {
    font-family: sans-serif;
    color: rgb(133, 133, 133);
  }
`;
const ContentLength = styled.div`
  color: ${({ length, limit }) => (length > limit ? "red" : "black")};
  margin-left: auto;
  padding-top: 1%;
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  gap: 1rem;
`;
