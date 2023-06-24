import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { feedReducer } from "./reducer/feed";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const rootReducer = { feed: feedReducer };

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["clients"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  null,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
