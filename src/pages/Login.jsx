import React, { useState } from "react";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import Input from "../components/common/Input";
import useNavigation from "../hooks/useNavigation";
import axios from "axios";
import Header from "../components/common/Header";
import { useDispatch } from "react-redux";
import { getuserData } from "../redux/modules/userSlice";

const Login = () => {
  const [login, setLogin] = useState({ id: "", password: "" });
  const { goToPath } = useNavigation();
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const onClickSumbit = (e) => {
    e.preventDefault();
    const api = process.env.REACT_APP_URL + "login";
    axios
      .post(
        api,
        { id: login.id, password: login.password },
        { withCredentials: true }
      )
      .then((response) => {
        onClickUserShow();
        goToPath("/");
      })
      .catch((error) => console.log(error));
  };
  const onClickUserShow = async () => {
    try {
      const api = process.env.REACT_APP_URL + "user";
      const response = await axios.get(api, { withCredentials: true });
      console.log(response.data);
      dispatch(getuserData(response.data));
    } catch (error) {
      console.error("유저 조회 실패:", error);
    }
  };

  return (
    <LoginWrap>
      <Header buttonShow={"login"} />
      <LoginContainer onSubmit={onClickSumbit}>
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
const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const LoginContainer = styled.form`
  width: 50%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  padding: 0 2rem;
  box-sizing: border-box;
  box-shadow: 1rem 1rem;
  @media (min-width: 480px) and (max-width: 1023px) {
    box-shadow: none;
    border: none;
    width: 90%;
    height: 90%;
  }
  @media (max-width: 480px) {
    box-shadow: none;
    border: none;
    width: 100%;
    height: 100%;
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
    font-size: 1.2rem;
  }
`;
const LoginFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Login;
