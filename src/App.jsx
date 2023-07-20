import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailReview from "./pages/DetailReview";
import Login from "./pages/Login";
import JoinMembership from "./pages/JoinMembership";
import NonExistent from "./pages/NonExistent";
import Header from "./components/common/Header";
import { PrivateRoute } from "./router/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<Header />}>
        <Route path="detail/:postid" element={<DetailReview />} />
        <Route element={<PrivateRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="join-membership" element={<JoinMembership />} />
        </Route>
        <Route path="*" element={<NonExistent />} />
      </Route>
    </Routes>
  );
};

export default App;
