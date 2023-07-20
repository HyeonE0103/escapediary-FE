import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailReview from "./pages/DetailReview";
import Login from "./pages/Login";
import JoinMembership from "./pages/JoinMembership";
import Header from "./components/common/Header";

{
  /* <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:postid" element={<DetailReview />} />
      <Route path="/create" element={<CreateReviewModal />} />
      <Route path="/login" element={<Login />} />
      <Route path="join-membership" element={<JoinMembership />} />
      <Route path="*" element={<JoinMembership />} />
    </Routes> */
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<MainPage />} />
        <Route path="/detail/:postid" element={<DetailReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="join-membership" element={<JoinMembership />} />
        <Route path="*" element={<JoinMembership />} />
      </Route>
    </Routes>
  );
};

export default App;
