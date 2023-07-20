import { useSelector } from "react-redux";
import { Outlet, useNavigate  } from "react-router-dom";

export const PrivateRoute = () => {
  const isUser = useSelector((state) => state.userData);

  return isUser ? <NotUser /> : <Outlet />;
};

const NotUser = () => {
  const navigate = useNavigate();
  alert("이미 로그인되어 있습니다");
  navigate("/");
  return null;
};
