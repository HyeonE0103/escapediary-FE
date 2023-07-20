import React, { useEffect } from "react";
import useNavigation from "../hooks/useNavigation";

const NonExistent = () => {
  const { goToPath } = useNavigation();
  useEffect(() => {
    alert("존재하지 않는 페이지입니다");
    goToPath("/");
  }, [goToPath]);
  return null;
};

export default NonExistent;
