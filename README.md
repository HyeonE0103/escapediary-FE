# EscapeDiary

# 📌 Table Of Contents

- [📖 Introduction](#-introduction)
- [🙋 My Role](#-my-role)
- [🔎 Detail](#-detail)
- [💡 Review](#-review)
- [✔ To Do List](#-to-do-list)

<br />
<br />
<br />

# 📖 Introduction

### 1. 프로젝트 개요

방탈출 평점 후기 블로그
<br />

### 2. 개발 환경

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> ![react](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server-FF6384?style=for-the-badge&logo=json&logoColor=white) ![axios](https://img.shields.io/badge/axios-35495E?style=for-the-badge&logo=axios&logoColor=white) ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) <img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### 3. 팀 레퍼런스 주소

[Notion](https://www.notion.so/5-EscapeDiary-9637b15e1d27465ab820e2127e152b45)

[BackEnd GitHub](https://github.com/since1630/EscapeDiary-BE)

### 4. 프로젝트 내용

<img src="https://github.com/hyeon12/escapediary-FE/assets/56420106/9dc5c151-0b8f-4d06-9b81-1092a6b50edc" width="300" height="500"/>

<img src="https://github.com/hyeon12/escapediary-FE/assets/56420106/37749b8e-9a78-4556-931b-959596badddc" width="300" height="500"/>

방탈출을 좋아하는 사람들을 위한 **방탈출 후기 웹사이트**
방탈출을 좋아하는 사람들끼리 방탈출에 대한 후기를 남기고 평점을 매겨
서로에게 방탈출을 추천하고 의견을 나눌 수 있는 웹사이트

<br/>

#### 주요 특징

- ⭐ 방탈출 평가를 한눈에
  - 방탈출을 잘 모르는 사람도 한눈에 볼수 있는 별 평점
- 😊 부담없이 웹사이트 방문
  - 로그인을 하지 않아도 게시물 조회가 가능
- 🚫 분탕러는 출입 금지!
  - 로그인을 한 사람만 게시물 작성 가능
- 👮 게시물 보호
  - 자신이 작성한 게시물만 삭제, 수정 가능
- 👁‍🗨 언제 어디서나 웹사이트에서 확인 가능
  - 테스크탑, 태블릿, 스마트폰 반응형 구현

<br />
<br />
<br />

# 🙋 My Role

### 1. 담당 업무

![신성윤](https://github.com/hyeon12/reactH99TestThree/assets/56420106/4dd285c0-0048-4c85-bf32-81ceb7ec6a02) <img src="https://github.com/hyeon12/escapediary-FE/assets/56420106/d0eed55d-76c8-4e65-a276-7c6aab9a5ab6" width="100" height="150"/> ![image](https://github.com/hyeon12/reactH99TestThree/assets/56420106/be2a43b6-b7a6-4a7f-94f7-be23a8b574f1) ![Alt text](image.png)

- 💖 신성윤: 백엔드 💖
- 💖 김승훈: 백엔드 💖
- 💖 이소현: 프론트 💖
- 💖 손규리: 프론트 💖
  <br/>

#### 주요 특징

- 신성윤: 나는야 멋쟁이 조장, 마스터피스, 코딩좀비
- 김승훈: 신성윤 직속 1번 대장
- 이소현: 5조 자칭 분위기 메이커
- 손규리: 겸손 = 규리

#### 프론트 업무 역할

- 이소현: UI제작, 프론트 기능구현, 백엔드와 협업, 문서작업
- 손규리: UI제작, 프론트 기능구현, 백엔드와 협업, 문서작업

<br />
<br />
<br />

# 🔎 Detail

### 주요 코드

- 로그인한 유저는 로그인 페이지에 들어갈 수 없음

  ```js
  <Route element={<PrivateRoute />}>
    <Route path="login" element={<Login />} />
    <Route path="join-membership" element={<JoinMembership />} />
  </Route>
  ```

  로그인한 사용자는 페이지에서 로그인과 회원가입 페이지를 못가도록 해놓았지만
  주소창을 이용해 억지로 접근할 경우 alert으로 로그인한 회원이라고 알려준뒤 main화면으로 보내준다
  <br>

- 로그인 했을 경우 유저 데이터를 redux에서 관리

  ```js
  const onClickUserShow = async () => {
    try {
      const api = process.env.REACT_APP_URL + "user";
      const response = await axios.get(api, { withCredentials: true });
      dispatch(getUserData(response.data));
    } catch (error) {
      console.error("유저 조회 실패:", error);
    }
  };
  ```

  토큰을 확인할 수 없기 때문에 로그인 된 순간 토큰으로 유저의 필요한 정보를
  redux에서 관리해 redux에서 관리하는 유저가 있다면 로그인으로 판별하여
  로그인사용자와 비로그인 사용자의 UI를 다르게 보여준다

  <br>

- 미디어 쿼리를 이용한 반응형 웹사이트

  ```js
  const CreateContainer = styled.div`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  background-color: rgb(255, 255, 255);
  width: 60%;
  height: 90%;
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 60%;
  }
  @media (max-width: 480px) {
    width: 70%;
    height: 70%;
  }
  ```

  웹사이트의 크기를 데스크탑, 태블릿, 스마트폰으로 나눠 기기에 맞는 UI를 보여준다

    <br>

- 조건을 눈으로 보여줌

  ```js
  <ContentLength
    length={review.roomname.length}
    limit={25}
    className="contentLength"
  >
    {review.roomname.length}/25
  </ContentLength>
  ```

  ```js
  const ContentLength = styled.div`
    color: ${({ length, limit }) => (length > limit ? "red" : "black")};
    margin-left: auto;
    padding-top: 1%;
  `;
  ```

  사용자가 게시물을 작성하거나 수정할 경우 글자수를 눈에 보이게 하여 글자수 제한을 편하게 하고
  글자수가 넘어갔을 경우 글씨 색을 빨강으로 변경하여 글자수가 초과된것을 알려준다

<br />
<br />
<br />

<!-- # 💡 Review

### 1. 후기

- 프로젝트 완료 후 **후기**를 작성합니다.
- **협업**을 통해 얻은 **고찰**을 위주로 기입합니다.

<br />
<br />

### 2. 코드 리뷰

- 보완점이 있는 코드를 **리뷰**합니다.

<br />
<br />
<br /> -->

# ✔ To Do List

- [x] **필수 기능**

  - [x] 게시글 조회
  - [x] 게시글 생성
  - [x] 게시글 상세보기

  <br />

- [x] **1차 기능구현**

  - [x] 회원가입
  - [x] 로그인

  <br />

- [x] **2차 기능구현**

  - [x] 게시글 수정
  - [x] 게시물 삭제

  <br />

- [ ] **3차 기능구현**
  - [ ] 댓글 생성
  - [ ] 댓글 생성
  - [ ] 댓글 수정
  - [ ] 댓글 삭제
  - [ ] 페이지네이션
