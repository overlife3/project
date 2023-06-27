import { setErrorFeed } from "../actions/feed";
import { updateMessages } from "../actions/server";

export const updateMessagesWithPoolingThunk = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { messages } = state.server;
    const lastId = messages[messages.length - 1].id;
    if (!lastId) return;
    const formData = new FormData();
    formData.append("actionName", "MessagesLoad");
    formData.append("messageId", lastId);
    fetch("https://a0830433.xsph.ru/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (typeof res === "object") {
          dispatch(updateMessages(res));
        }
      })
      .catch((err) => {
        dispatch(setErrorFeed(err));
      });
  };
};
