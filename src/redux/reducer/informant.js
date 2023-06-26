import {
  SET_ERROR_INFORMANT,
  SET_LOADING_INFORMANT,
} from "../actions/informant";

const initialState = {
  loading: false,
  error: null,
};

export const informantReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_INFORMANT:
      return {
        ...state,
        loading: payload,
        error: null,
      };
    case SET_ERROR_INFORMANT:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
