import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };

  const goBack = () => {
    navigate(-1);
  };

  return { goToPath, goBack };
};

export default useNavigation;
