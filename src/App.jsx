import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailReview from "./pages/DetailReview";
import CreateReview from "./pages/CreateReview";
import Login from "./pages/Login";
import JoinMembership from "./pages/JoinMembership";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:postid" element={<DetailReview />} />
      <Route path="/create" element={<CreateReview />} />
      <Route path="/login" element={<Login />} />
      <Route path="join-membership" element={<JoinMembership />} />
    </Routes>
  );
};

export default App;
