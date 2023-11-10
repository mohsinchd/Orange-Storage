import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  const { user } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setCheckingStatus(false);
  }, [user, isLoggedIn]);

  return { isLoggedIn, checkingStatus };
};

export default useAuth;
