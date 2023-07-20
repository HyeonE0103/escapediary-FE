import React, { useState } from "react";
import Button from "./Button";
import { styled } from "styled-components";
import useNavigation from "../../hooks/useNavigation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteUserData } from "../../redux/modules/userSlice";
import { Outlet } from "react-router-dom";

const Header = ({ main }) => {
  const userData = useSelector((state) => state.userData);
  const { goToPath } = useNavigation();
  const dispatch = useDispatch();

  console.log("헤더 유저 데이터", userData);

  const logOut = async () => {
    const api = process.env.REACT_APP_URL + "logout";
    await axios
      .post(api)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteUserData());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <HeaderWrap main={main}>
        <p onClick={() => goToPath("/")}>EscapeDiary</p>
        {userData ? (
          <Button color={"white"} size={"small"} onClick={logOut}>
            로그아웃
          </Button>
        ) : (
          <Button
            color={"white"}
            size={"small"}
            onClick={() => goToPath("/login")}
          >
            로그인
          </Button>
        )}
      </HeaderWrap>
      <Outlet />
    </>
  );
};
const HeaderWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 10vh;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  display: flex;
  @media (max-width: 480px) {
    display: ${({ main }) => !main && "none"};
  }
  p {
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Header;
