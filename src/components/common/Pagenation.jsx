import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const Pagenation = ({ limit, totalPosts, page, setPage }) => {
  const [currentPageRange, setCurrentPageRange] = useState(1);

  const numPages = Math.ceil(totalPosts / limit);

  const handleNextPageRange = () => {
    const nextPageRange = currentPageRange + 5;
    if (nextPageRange <= numPages) {
      setCurrentPageRange(nextPageRange);
      setPage(nextPageRange);
    }
  };

  const handlePreviousPageRange = () => {
    const previousPageRange = currentPageRange - 5;
    if (previousPageRange >= 1) {
      setCurrentPageRange(previousPageRange);
      setPage(previousPageRange);
    }
  };

  const renderButtons = () => {
    const buttons = [];
    const startPage = currentPageRange;
    const endPage = Math.min(startPage + 4, numPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => setPage(i)}
          active={i === page}
          color={"black"}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <PagenationWrap>
      <PagenationContainer>
        <Button
          color={"black"}
          onClick={handlePreviousPageRange}
          disabled={currentPageRange === 1}
        >
          ◀
        </Button>
        {renderButtons()}
        <Button
          color={"black"}
          onClick={handleNextPageRange}
          disabled={currentPageRange + 4 >= numPages}
        >
          ▶
        </Button>
      </PagenationContainer>
    </PagenationWrap>
  );
};

const PagenationWrap = styled.div`
  padding: 1rem;
  width: 100%;
`;

const PagenationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  Button {
    font-size: 1rem;
  }
`;

export default Pagenation;
