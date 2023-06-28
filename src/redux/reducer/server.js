import { mergeArrays } from "../../util/mergeArrays";
import {
  GET_ALL_MESSAGES,
  UPDATE_MESSAGES,
  TOGGLE_FAVORITE_MESSAGE,
  GET_OLD_MESSAGES,
  UPDATE_FAVORITE_MESSAGES,
} from "../actions/server";

const initialState = {
  messages: [],
  likeImages: [],
  dislikeImages: [],
  favoriteMessages: [],
};

export const serverReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        messages: payload.Messages,
        likeImages: payload.likeImages,
        dislikeImages: payload.dislikeImages,
      };
    case UPDATE_MESSAGES:
      const updatedMessages = mergeArrays(state.messages, payload.Messages);

      return {
        ...state,
        messages: updatedMessages,
        likeImages: payload.likeImages,
        dislikeImages: payload.dislikeImages,
      };
    case GET_OLD_MESSAGES:
      // добавление старых сообщений в массив всех сообщений
      return {
        ...state,
      };
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
    case UPDATE_FAVORITE_MESSAGES:
      const updatedFavoriteMessages = state.favoriteMessages.filter(
        (favoriteMessageId) => {
          return !!payload.find((message) => message.id === favoriteMessageId);
        }
      );
      return { ...state, favoriteMessages: updatedFavoriteMessages };
    default:
      return state;
  }
};
