import { GET_ALL_MESSAGES } from "../actions/actions";

const initialState = {
  messages: [],
};

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
