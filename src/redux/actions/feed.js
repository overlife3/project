export const SET_ERROR_FEED = "SET_ERROR_FEED";
export const SET_LOADING_FEED = "SET_LOADING_FEED";

export const TOGGLE_DIRECTION = "TOGGLE_DIRECTION";

export const setErrorFeed = (error) => {
  return {
    type: SET_ERROR_FEED,
    payload: error,
  };
};

export const setLoadingFeed = (bool) => {
  return {
    type: SET_LOADING_FEED,
    payload: bool,
  };
};

export const toggleDirection = () => {
  return {
    type: TOGGLE_DIRECTION,
  };
};
