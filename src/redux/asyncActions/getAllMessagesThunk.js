import { feedError, feedLoading, getAllMessages } from "../actions/actions";

export const getAllMessagesThunk = () => {
  const formData = new FormData();
  formData.append("actionName", "MessagesLoad");
  return (dispatch) => {
    dispatch(feedLoading());
    fetch("http://a0830433.xsph.ru/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => dispatch(getAllMessages(res)))
      .catch((err) => {
        dispatch(feedError(err));
      });
  };
};
