export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES";

export const getAllMessages = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    payload: messages,
  };
};
