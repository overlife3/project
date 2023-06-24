import { useEffect } from "react";

const fetchData = () => {
  dispatch(loading);
  fetch("url")
    .then((json) => dispatch(json))
    .catch((err) => dispatch(err));
};

export const usePolling = (fetchData, duration) => {
  useEffect(() => {
    const timer = setInterval(fetchData, duration);
    return () => clearInterval(timer);
  }, []);
};
