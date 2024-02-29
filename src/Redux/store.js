import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import { newsReducer } from "./News/reducer";
import { authReducer } from "./auth/auth.reducer";
const rootReducer = combineReducers({
  news: newsReducer,
  auth: authReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);
