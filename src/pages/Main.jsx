import React, { useState } from "react";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import List from "../components/List";

const Main = () => {
  const [user, setUser] = useState(false);
  const [dummy, setDummy] = useState([
    {
      id: 1,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 5,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 6,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 7,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
    {
      id: 8,
      title: "방탈출 후기!!",
      content: "ㅁ나어리마;ㄴ어먀ㅐㅁㅊ렁ㄴ매ㅑ처ㅡ랴ㅡㄴ앰츠ㅕㅓㅑㅐㄴㅁ어",
      date: "2023-07-14",
      star: "⭐⭐⭐⭐⭐",
    },
  ]);
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
          <Button color={"black"} size={"medium"}>
            리뷰 쓰기
          </Button>
        </div>
        <div className="MainListSection">
          {dummy.map((item, i) => (
            <List
              key={i}
              title={item.title}
              content={item.content}
              date={item.date}
              star={item.star}
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
