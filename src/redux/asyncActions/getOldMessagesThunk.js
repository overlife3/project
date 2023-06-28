import { ARTIFICIAL_DELAY } from "../../constants/request";
import { setErrorInformant, setLoadingInformant } from "../actions/informant";
import { getOldMessages } from "../actions/server";

export const getOldMessagesThunk = () => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("actionName", "MessagesLoad");
    formData.append("oldMessages", true);
    dispatch(setLoadingInformant(true));
    setTimeout(() => {
      fetch("http://a0830433.xsph.ru/", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (typeof res === "object") {
            dispatch(getOldMessages(res));
          }
          dispatch(setLoadingInformant(false));
        })
        .catch((err) => {
          dispatch(setErrorInformant(err));
        });
    }, ARTIFICIAL_DELAY * 1000);
  };
};
