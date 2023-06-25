export const GET_ALL_MESSAGES = "GET_ALL_MESSAGES";
export const FEED_ERROR = "FEED_ERROR";
export const FEED_LOADING = "FEED_LOADING";
export const UPDATE_MESSAGES = "UPDATE_MESSAGES";
export const TOGGLE_FAVORITE_MESSAGE = "TOGGLE_FAVORITE_MESSAGE";
export const TOGGLE_DIRECTION = "TOGGLE_DIRECTION";

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

export const feedError = (error) => {
  return {
    type: FEED_ERROR,
    payload: error,
  };
};

export const feedLoading = () => {
  return {
    type: FEED_LOADING,
  };
};

export const toggleFavoriteMessage = (id) => {
  return {
    type: TOGGLE_FAVORITE_MESSAGE,
    payload: id,
  };
};

export const toggleDirection = () => {
  return {
    type: TOGGLE_DIRECTION,
  };
};
