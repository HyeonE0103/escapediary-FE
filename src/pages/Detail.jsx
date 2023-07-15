import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../components/common/Button";

const Detail = () => {
  const [user, setUser] = useState(false);
  return (
    <DetailWrap>
      <DetailContainer>
        <DetailHeader>
          <div className="backIcon">←</div>
          {/* icon 처리 */}
          <h1>방탈출 후기</h1>
          <div className="detailStar">"⭐⭐⭐⭐⭐"</div>
        </DetailHeader>
        <DetailBody>
          <div className="detailContent">푸히힛푸히힛</div>
          <div className="detailDate">2023-07-14</div>
        </DetailBody>
        {user && (
          <DetailBodyFooter>
            <Button color={"black"} size={"medium"}>
              수정
            </Button>
            <Button color={"black"} size={"medium"}>
              삭제
            </Button>
          </DetailBodyFooter>
        )}
      </DetailContainer>
    </DetailWrap>
  );
};

const DetailWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailContainer = styled.div`
  width: 40rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #d8d8d8;
  position: relative;
  padding: 0 2rem;
  box-sizing: border-box;
`;
const DetailHeader = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .backIcon {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    font-weight: bold;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
  .detailStar {
    padding-top: 1.5rem;
    font-size: 1.2rem;
  }
`;
const DetailBody = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  .detailContent {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #d8d8d8;
  }
  .detailDate {
    padding: 1rem 0;
    font-weight: bold;
    margin-left: auto;
  }
`;
const DetailBodyFooter = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Detail;
