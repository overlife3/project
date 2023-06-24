import {
  FEED_ERROR,
  FEED_LOADING,
  GET_ALL_MESSAGES,
  UPDATE_MESSAGES,
} from "../actions/actions";

const initialState = {
  messages: [],
  likeImages: [],
  dislikeImages: [],
  loading: false,
  error: null,
};

export const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: payload.Messages,
        likeImages: payload.likeImages,
        dislikeImages: payload.dislikeImages,
        loading: false,
        error: null,
      };
    case UPDATE_MESSAGES:
      // логика добавления и обновления одинаковые, так как не знаю что может меняться
      // предусмотрел изменение любого из полей
      // не сделал получение всех данных и обновление сообщений одним action, так как это разные абстракции
      return {
        ...state,
        messages: payload.Messages,
        likeImages: payload.likeImages,
        dislikeImages: payload.dislikeImages,
        loading: false,
        error: null,
      };
    case FEED_LOADING:
      return { ...state, loading: true };
    case FEED_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
