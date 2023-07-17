import React from "react";
import { styled } from "styled-components";

const List = ({ title, content, date, star, onClick }) => {
  return (
    <ListContainer onClick={onClick}>
      <ListLeft>
        <h2>{title}</h2>
        <div>{content}</div>
      </ListLeft>
      <ListRight>
        <div className="ListDate">{date}</div>
        <div className="ListStar">{"⭐".repeat(star)}</div>
      </ListRight>
    </ListContainer>
  );
};
const ListContainer = styled.div`
  display: flex;
  width: 80%;
  height: 5rem;
  padding: 2rem 0;
  border-bottom: 1px solid black;
  position: relative;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem 0;
    height: 6rem;
  }
`;
const ListLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
  position: relative;
  h2 {
    position: absolute;
    width: 100%;
    top: 0;
    font-size: 1.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: break-word;
    word-break: break-all;
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  div {
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #848484;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: break-word;
    word-break: break-all;
    @media (max-width: 480px) {
      padding-top: 0.5rem;
    }
  }
`;
const ListRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: right;
  .ListDate {
    flex: 1;
    font-weight: bold;
    align-items: right;
    @media (max-width: 480px) {
      padding: 0.5rem 0;
    }
  }
  .ListStar {
    flex: 1;
    position: absolute;
    bottom: 1rem;
    right: 0;
    @media (max-width: 480px) {
      position: static;
    }
  }
`;
export default List;
