import {
  FEED_ERROR,
  FEED_LOADING,
  GET_ALL_MESSAGES,
  UPDATE_MESSAGES,
  TOGGLE_FAVORITE_MESSAGE,
  TOGGLE_DIRECTION,
} from "../actions/actions";

const initialState = {
  messages: [],
  likeImages: [],
  dislikeImages: [],
  favoriteMessages: [],
  direction: "ascending", // "descending" | "ascending"
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
    case TOGGLE_FAVORITE_MESSAGE:
      let newFavoriteMessages = state.favoriteMessages;
      if (newFavoriteMessages.includes(payload)) {
        newFavoriteMessages = newFavoriteMessages.filter(
          (item) => item !== payload
        );
      } else {
        newFavoriteMessages.push(payload);
      }
      state.favoriteMessages = newFavoriteMessages;
      return { ...state };
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
