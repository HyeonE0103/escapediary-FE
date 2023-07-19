import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import { styled } from "styled-components";
import List from "../components/MainList";
import useNavigation from "../hooks/useNavigation";
import axios from "axios";
import Pagenation from "../components/common/Pagenation";
import Header from "../components/common/Header";
import CreateReviewModal from "../components/CreateReviewModal";
import { useSelector } from "react-redux";

const MainPage = () => {
  const { goToPath } = useNavigation();
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 6;
  const offset = (page - 1) * limit;
  const userData = useSelector((state) => state.userData);
  console.log("메인페이지 유저 데이터", userData);

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  useEffect(() => {
    const api = async () => {
      const api = process.env.REACT_APP_URL + "posts";
      console.log(api);
      try {
        const apiData = await axios.get(api, { withCredentials: true });
        setData(apiData.data.posts.reverse());
        setPosts(apiData.data.posts.slice(0, limit));
      } catch (e) {
        console.log(e);
      }
    };
    api();
  }, []);
  console.log(data);
  useEffect(() => {
    if (data) {
      setPosts(data.slice(offset, offset + limit));
    }
  }, [page]);
  return (
    <WrapMain>
      <Header />
      <MainBody>
        <div className="MainButtonSection">
          <Button color={"black"} size={"medium"} onClick={openModalHandler}>
            리뷰 쓰기
          </Button>
        </div>
        <div className="MainListSection">
          {posts &&
            posts.map((item) => (
              <List
                key={item.postId}
                roomName={item.roomname}
                content={item.content}
                date={item.createdAt.slice(0, 10)}
                star={item.star}
                onClick={() => goToPath(`/detail/${item.postId}`)}
              />
            ))}
        </div>
        {setOpenModal
          ? openModal && (
              <CreateReviewModal openModalHandler={openModalHandler} />
            )
          : null}
      </MainBody>
      <MainFooter>
        {data && (
          <Pagenation
            limit={limit}
            page={page}
            totalPosts={data.length}
            setPage={setPage}
          />
        )}
      </MainFooter>
    </WrapMain>
  );
};
const WrapMain = styled.div`
  width: 100%;
  height: 100vh;
`;
const MainBody = styled.div`
  box-sizing: border-box;
  padding: 2rem 3rem 5rem 3rem;
  @media (max-width: 480px) {
    padding: 1rem 1rem 2rem 1rem;
  }
  .MainButtonSection {
    display: flex;
    padding-bottom: 2rem;
    button {
      margin-left: auto;
    }
    @media (max-width: 480px) {
      padding-bottom: 1rem;
    }
  }
  .MainListSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default MainPage;
