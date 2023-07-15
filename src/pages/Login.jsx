import React from "react";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import Input from "../components/common/Input";

const Login = () => {
  return (
    <LoginWrap>
      <LoginContainer>
        <LoginHeader>
          <h1>Login</h1>
        </LoginHeader>
        <LoginBody>
          <div className="inputSection">
            <Input labelText="id" />
            <Input labelText="password" />
          </div>
          <p>join membership</p>
        </LoginBody>
        <LoginFooter>
          <Button color="black" size="medium">
            Sign In
          </Button>
        </LoginFooter>
      </LoginContainer>
    </LoginWrap>
  );
};
const LoginWrap = styled.div`
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
  }
`;
const LoginFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Login;
