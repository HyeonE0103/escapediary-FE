import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../components/common/Button";
import useNavigation from "../hooks/useNavigation";
import axios from "axios";

const Detail = () => {
  const { goBack } = useNavigation();
  const [user, setUser] = useState(false);
  const [data, setData] = useState(null);
  const postId = useParams();

  useEffect(() => {
    const api = async () => {
      const api = process.env.REACT_APP_URL;
      try {
        const apiData = await axios.get(api);
        setData(apiData.data.posts);
        console.log(apiData.data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    api();
  }, []);

  return (
    <DetailWrap>
      <DetailContainer>
        {data && data
          .filter((item => item.postId == postId.postid))
          .map((item) => {
            return (
              <>
                <DetailHeader>
                  <div className="backIcon" onClick={goBack}>
                    ←
                  </div>
                  {/* icon 처리 */}
                  <h1>{item.title}</h1>
                  <div className="detailStar">{`${'⭐'.repeat(item.star)}`}</div>
                </DetailHeader>
                <DetailBody>
                  <div className="detailContent">{item.content}</div>
                  <div className="detailDate">{item.createdAt.slice(0, 10)}</div>
                </DetailBody>
              </>
            )
          })}
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
    cursor: pointer;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    word-break: break-all;
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
    overflow: auto;
    word-break: break-all;
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
