import React, { useState } from "react";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import Input from "../components/common/Input";
import useNavigation from "../hooks/useNavigation";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({ id: "", password: "" });
  const { goToPath } = useNavigation();

  const onChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onClickSumbit = (e) => {
    e.preventDefault();
    const api = process.env.REACT_APP_URL + "login";
    console.log("주소", process.env.REACT_APP_URL);
    axios
      .post(
        api,
        { id: login.id, password: login.password },
        { withCredentials: true }
      )
      .then((response) => console.log("data", response))
      // goToPath("/"))
      .catch((error) => console.log(error));
  };

  return (
    <LoginWrap onSubmit={onClickSumbit}>
      <LoginContainer>
        <LoginHeader>
          <h1>Login</h1>
        </LoginHeader>
        <LoginBody>
          <div className="inputSection">
            <Input
              labelText="id"
              type="text"
              name="id"
              value={login.id}
              onChange={onChangeHandler}
            />
            <Input
              labelText="password"
              type="password"
              name="password"
              value={login.password}
              onChange={onChangeHandler}
            />
          </div>
          <p onClick={() => goToPath("/join-membership")}>join membership</p>
        </LoginBody>
        <LoginFooter>
          <Button color="black" size="medium" type="submit">
            Login
          </Button>
        </LoginFooter>
      </LoginContainer>
    </LoginWrap>
  );
};
const LoginWrap = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginContainer = styled.div`
  width: 35rem;
  height: 40rem;
  margin: auto;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d8d8d8;
  padding: 0 2rem;
  box-sizing: border-box;
  box-shadow: 1rem 1rem;
  @media (max-width: 480px) {
    box-shadow: none;
    border: none;
  }
`;
const LoginHeader = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;
const LoginBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  .inputSection {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
  p {
    margin-left: auto;
    color: #848484;
    cursor: pointer;
  }
`;
const LoginFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Login;
