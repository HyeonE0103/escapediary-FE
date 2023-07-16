import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import List from "../components/List";
import useNavigation from "../hooks/useNavigation";
import axios from "axios";

const Main = () => {
  const { goToPath } = useNavigation();
  const [user, setUser] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const api = async () => {
      try {
        const apiData = await axios.get("http://43.202.51.213/api/posts");
        setData(apiData.data.posts);
        console.log(apiData.data.posts);
      } catch (e) {
        console.log(e);
      }
    };
    api();
  }, []);
  return (
    <WrapMain>
      <Header>
        <p>EscapeDiary</p>
        {user && (
          <Button color={"white"} size={"small"}>
            로그아웃
          </Button>
        )}
      </Header>
      <MainBody>
        <div className="MainButtonSection">
          <Button
            color={"black"}
            size={"medium"}
            onClick={() => goToPath("/create")}
          >
            리뷰 쓰기
          </Button>
        </div>
        <div className="MainListSection">
          {data &&
            data.map((item) => (
              <List
                key={item.postId}
                title={item.title}
                content={item.content}
                date={item.createdAt.slice(0, 10)}
                star={item.star}
                onClick={() => goToPath(`/detail/${item.postId}`)}
              />
            ))}
        </div>
      </MainBody>
    </WrapMain>
  );
};
const WrapMain = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  p {
    font-size: 2.5rem;
    color: white;
    font-weight: bold;
  }
`;
const MainBody = styled.div`
  box-sizing: border-box;
  padding: 2rem 4rem 8rem 4rem;
  .MainButtonSection {
    display: flex;
    padding-bottom: 2rem;
    button {
      margin-left: auto;
    }
  }
  .MainListSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export default Main;
