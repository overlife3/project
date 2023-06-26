import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const usePolling = (thunk, duration) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(thunk());
    }, duration * 1000);
    return () => clearInterval(timer);
  }, []);
};
