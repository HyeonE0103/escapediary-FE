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
  min-width: 350px;
  padding: 2rem 0 2rem 0;
  border-bottom: 1px solid black;
  position: relative;
  cursor: pointer;
`;
const ListLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 1.5rem;
    padding-bottom: 1rem;
  }
  div {
    color: #848484;
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
  }
  .ListStar {
    flex: 1;
    position: absolute;
    bottom: 1rem;
    right: 0;
  }
`;
export default List;
