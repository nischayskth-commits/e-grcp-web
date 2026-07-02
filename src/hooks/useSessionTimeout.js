import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../features/auth/redux/authSlice";

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

const events = [
  "click",
  "mousemove",
  "mousedown",
  "keypress",
  "scroll",
  "touchstart",
];

const useSessionTimeout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);

      timer = setTimeout(() => {
        dispatch(logout());

        navigate("/session-expired", {
          replace: true,
        });
      }, SESSION_TIMEOUT);
    };

    events.forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer();

    return () => {
      clearTimeout(timer);

      events.forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [dispatch, navigate]);
};

export default useSessionTimeout;