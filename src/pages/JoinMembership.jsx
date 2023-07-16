import React from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { styled } from "styled-components";

const JoinMembership = () => {
  return (
    <JoinMembershipWrap>
      <JoinMembershipContainer>
        <JoinMebershipHeader>
          <h1>회원가입</h1>
        </JoinMebershipHeader>
        <JoinMebershipBody>
          <div>
            <Input labelText="id" />
            <p>4자 이상 6자 이하의 아이디를 입력해주세요</p>
          </div>
          <div>
            <Input labelText="Password" />
            <p>10자 이상 16자 이하의 비밀번호를 입력해주세요</p>
          </div>
          <div>
            <Input labelText="Password Confirm" />
            <p>위와 똑같은 비밀번호를 적어주세요</p>
          </div>
        </JoinMebershipBody>
        <JoinMebershipFooter>
          <Button color="black" size="medium">
            Submit
          </Button>
        </JoinMebershipFooter>
      </JoinMembershipContainer>
    </JoinMembershipWrap>
  );
};
const JoinMembershipWrap = styled.div`
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
