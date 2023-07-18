import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import useNavigation from "../hooks/useNavigation";

const DetailReview = () => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(false);
  const postId = useParams();
  const { goBack } = useNavigation();

  useEffect(() => {
    const api = async () => {
      const url = process.env.REACT_APP_URL + "posts";
      try {
        const apiData = await axios.get(url);
        const postData = apiData.data.posts.filter(
          (item) => item.postId === Number(postId.postid)
        );
        setData(postData[0]);
      } catch (e) {
        console.log(e);
      }
    };
    api();
  }, []);
  return (
    <DetailWrap>
      <Header />
      {data && (
        <DetailBody>
          <InformationSection>
            <div className="backIcon" onClick={goBack}>
              ←
            </div>
            <div className="informationContent">
              {user && <div>userID</div>}
              <div>{"⭐".repeat(data.star)}</div>
              <div>{data.createdAt.slice(0, 10)}</div>
            </div>
            {user && (
              <div className="userButton">
                <Button color={"white"} size={"small"}>
                  수정
                </Button>
                <Button color={"white"} size={"small"}>
                  삭제
                </Button>
              </div>
            )}
          </InformationSection>
          <ContentSection>
            <div className="contentTitle">
              <div className="backIcon" onClick={goBack}>
                ←
              </div>
              <div>{data.title}</div>
            </div>
            <div className="contentContent">{data.content}</div>
          </ContentSection>
        </DetailBody>
      )}
    </DetailWrap>
  );
};
const DetailWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const DetailBody = styled.div`
  box-sizing: border-box;
  padding: 3%;
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
const InformationSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2e2e2e;
  color: white;
  font-size: 1.5rem;
  box-sizing: border-box;
  padding: 3%;
  .backIcon {
    font-weight: bold;
    font-size: 2rem;
    margin-left: 0;
  }
  .informationContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 3%;
  }
  .userButton {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    order: 2;
    font-size: 1rem;
    flex-direction: row;
    justify-content: space-evenly;
    .backIcon {
      display: none;
    }
    .informationContent {
      gap: 10%;
    }
    .userButton {
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
`;
const ContentSection = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  .contentTitle {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1c1c1c;
    font-size: 2rem;
    color: white;
    font-weight: bold;
    word-break: break-all;
    overflow-wrap: break-word;
    padding: 5%;
    .backIcon {
      display: none;
    }
  }
  .contentContent {
    flex: 3;
    margin: 2% 0 0 2%;
    padding: 2%;
    box-sizing: border-box;
    border: 1px #d8d8d8 solid;
    font-size: 1.2rem;
    word-break: break-all;
    overflow-wrap: break-word;
  }
  @media (max-width: 480px) {
    flex: 5;
    position: relative;
    .contentTitle {
      font-size: 1.3rem;
      flex-direction: column;
      .backIcon {
        display: unset;
        font-size: 1.5rem;
        position: absolute;
        top: 0;
        left: 0;
        margin: 2%;
      }
    }
    .contentContent {
      margin: 2% 0 2% 0;
    }
  }
`;
export default DetailReview;
