import React, { useState } from "react";
import Button from "./Button";
import { styled } from "styled-components";
import useNavigation from "../../hooks/useNavigation";

const Header = ({ buttonShow }) => {
  const [user, setUser] = useState(false);
  const { goToPath } = useNavigation();
  return (
    <HeaderWrap>
      <p onClick={() => goToPath("/")}>EscapeDiary</p>
      {buttonShow === "loginUser" ? (
        <Button color={"white"} size={"small"}>
          로그아웃
        </Button>
      ) : buttonShow === "login" ? null : (
        <Button
          color={"white"}
          size={"small"}
          onClick={() => goToPath("/login")}
        >
          로그인
        </Button>
      )}
    </HeaderWrap>
  );
};
const HeaderWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 480px) {
    display: none;
  }

  p {
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Header;
