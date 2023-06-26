import { ARTIFICIAL_DELAY } from "../../constants/request";
import { setErrorInformant, setLoadingInformant } from "../actions/informant";
import { updateMessages } from "../actions/server";

export const updateMessagesWithScrollThunk = () => {
  return (dispatch, getState) => {
    const state = getState();
    const { messages } = state.server;
    const lastId = messages[messages.length - 1].id;
    if (!lastId) return;
    dispatch(setLoadingInformant(true));
    const formData = new FormData();
    formData.append("actionName", "MessagesLoad");
    formData.append("messageId", lastId);
    setTimeout(() => {
      fetch("http://a0830433.xsph.ru/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (typeof res === "object") {
            dispatch(updateMessages(res));
          }
          dispatch(setLoadingInformant(false));
        })
        .catch((err) => {
          dispatch(setErrorInformant(err));
        });
    }, ARTIFICIAL_DELAY * 1000);
  };
};
