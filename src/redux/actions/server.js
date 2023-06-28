export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES";
export const UPDATE_MESSAGES = "UPDATE_MESSAGES";
export const TOGGLE_FAVORITE_MESSAGE = "TOGGLE_FAVORITE_MESSAGE";
export const GET_OLD_MESSAGES = "GET_OLD_MESSAGES";
export const UPDATE_FAVORITE_MESSAGES = "UPDATE_FAVORITE_MESSAGES";

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

export const getOldMessages = (messages) => {
  return {
    type: GET_OLD_MESSAGES,
    payload: messages,
  };
};

export const toggleFavoriteMessage = (id) => {
  return {
    type: TOGGLE_FAVORITE_MESSAGE,
    payload: id,
  };
};
export const updateFavoriteMessages = (messages) => {
  return {
    type: UPDATE_FAVORITE_MESSAGES,
    payload: messages,
  };
};
