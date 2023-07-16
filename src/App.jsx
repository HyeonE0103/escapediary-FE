import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Login from "./pages/Login";
import JoinMembership from "./pages/JoinMembership";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:postid" element={<Detail />} />
      <Route path="/create" element={<Create />} />
      <Route path="/login" element={<Login />} />
      <Route path="join-membership" element={<JoinMembership />} />
    </Routes>
  );
};

export default App;
