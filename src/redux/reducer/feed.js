import {
  SET_ERROR_FEED,
  SET_LOADING_FEED,
  TOGGLE_DIRECTION,
} from "../actions/feed";

const initialState = {
  direction: "ascending", // "descending" | "ascending"
  loading: false,
  error: null,
};

export const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_FEED:
      return { ...state, loading: payload, error: null };
    case SET_ERROR_FEED:
      return { ...state, loading: false, error: payload };
    case TOGGLE_DIRECTION:
      if (state.direction === "ascending") {
        state.direction = "descending";
      } else {
        state.direction = "ascending";
      }
      return { ...state };
    default:
      return state;
  }
};
