import React, { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import axios from "axios";
import useNavigation from "../hooks/useNavigation";

const JoinMembership = () => {
  const [join, setJoin] = useState({ id: "", password: "", confirm: "" })
  const { goToPath } = useNavigation();

  const onChangeHandler = (e) => {
    setJoin({ ...join, [e.target.name]: e.target.value });
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-z0-9+]{4,6}$/.test(join.id)) {
      alert("아이디는 4자 이상 6자 이하의 영문 소문자, 숫자만 입력 가능합니다.");
    }
    else if (!/^[a-z0-9+]{10,16}$/.test(join.password)) {
      alert("비밀번호는 10자 이상 16자 이하의 영문 소문자, 숫자만 입력 가능합니다.");
    }
    else if (join.password.trim() !== join.confirm.trim()) {
      alert("비밀번호를 다시 확인해주세요.");
    }
    else {
      const api = process.env.REACT_APP_URL;
      axios
        .post(api, {
          id: join.id,
          password: join.password,
          confirm: join.confirm,
        })
        .then((response) => goToPath("/login"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <JoinMembershipWrap onSubmit={onClickSubmit}>
      <JoinMembershipContainer>
        <JoinMebershipHeader>
          <h1>회원가입</h1>
        </JoinMebershipHeader>
        <JoinMebershipBody>
          <div>
            <Input
              labelText="id"
              required
              type="text"
              name="id"
              value={join.id}
              onChange={onChangeHandler}
            />
            <p>아이디는 4자 이상 6자 이하의 영문 소문자, 숫자만 입력 가능합니다.</p>
          </div>
          <div>
            <Input
              labelText="Password"
              required
              type="password"
              name="password"
              value={join.password}
              onChange={onChangeHandler}
            />
            <p>비밀번호는 10자 이상 16자 이하의 영문 소문자, 숫자만 입력 가능합니다.</p>
          </div>
          <div>
            <Input labelText="Password Confirm"
              required
              type="password"
              name="confirm"
              value={join.confirm}
              onChange={onChangeHandler}
            />
            <p>위와 동일한 비밀번호를 적어주세요.</p>
          </div>
        </JoinMebershipBody>
        <JoinMebershipFooter>
          <Button type="submit" color="black" size="medium">
            Submit
          </Button>
        </JoinMebershipFooter>
      </JoinMembershipContainer>
    </JoinMembershipWrap>
  );
};
const JoinMembershipWrap = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const JoinMembershipContainer = styled.div`
  width: 40rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  position: relative;
  padding: 0 2rem;
  box-sizing: border-box;
`;
const JoinMebershipHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`;
const JoinMebershipBody = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  p {
    color: #848484;
    font-size: 0.8rem;
  }
`;
const JoinMebershipFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default JoinMembership;
