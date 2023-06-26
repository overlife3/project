export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES";
export const UPDATE_MESSAGES = "UPDATE_MESSAGES";
export const TOGGLE_FAVORITE_MESSAGE = "TOGGLE_FAVORITE_MESSAGE";

export const getAllMessages = (messages) => {
  return {
    type: GET_ALL_MESSAGES,
    payload: messages,
  };
};

export const updateMessages = (messages) => {
  return {
    type: UPDATE_MESSAGES,
    payload: messages,
  };
};

export const toggleFavoriteMessage = (id) => {
  return {
    type: TOGGLE_FAVORITE_MESSAGE,
    payload: id,
  };
};
