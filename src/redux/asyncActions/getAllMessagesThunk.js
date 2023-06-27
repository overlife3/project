import { ARTIFICIAL_DELAY } from "../../constants/request";
import { setErrorFeed, setLoadingFeed } from "../actions/feed";
import { getAllMessages } from "../actions/server";

export const getAllMessagesThunk = () => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("actionName", "MessagesLoad");
    formData.append("messageId", 0);
    dispatch(setLoadingFeed(true));
    setTimeout(() => {
      fetch("https://a0830433.xsph.ru/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (typeof res === "object") {
            dispatch(getAllMessages(res));
          }
          dispatch(setLoadingFeed(false));
        })
        .catch((err) => {
          dispatch(setErrorFeed(err));
        });
    }, ARTIFICIAL_DELAY * 1000);
  };
};
