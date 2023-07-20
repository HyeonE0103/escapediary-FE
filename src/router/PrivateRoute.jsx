import { useSelector } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import { Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const isUser = useSelector((state) => state.userData);

  return isUser ? () => NotUser : <Outlet />;
};

const NotUser = () => {
  const { goToPath } = useNavigation();
  alert("이미 로그인되어 있습니다");
  goToPath("/");
};
