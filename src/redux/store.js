import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { feedReducer } from "./reducer/feed";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { informantReducer } from "./reducer/informant";
import { serverReducer } from "./reducer/server";
const rootReducer = combineReducers({
  server: serverReducer,
  feed: feedReducer,
  informant: informantReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["feed", "server"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
