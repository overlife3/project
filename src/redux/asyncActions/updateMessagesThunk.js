import { feedError, feedLoading, updateMessages } from "../actions/actions";

export const updateMessagesThunk = () => {
  // логика добавления и обновления одинаковые, так как не знаю что может меняться
  // предусмотрел изменение любого из полей
  // не сделал получение всех данных и обновление сообщений одним action, так как это разные абстракции
  const formData = new FormData();
  formData.append("actionName", "MessagesLoad");
  return (dispatch) => {
    dispatch(feedLoading());
    fetch("http://a0830433.xsph.ru/", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => dispatch(updateMessages(res)))
      .catch((err) => {
        dispatch(feedError(err));
      });
  };
};
