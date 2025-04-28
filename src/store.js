import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  productReducer,
  userReducer,
  productsReducer,
  usersReducer,
  appReducer,
} from "./redusers/index";

const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  users: usersReducer,
  product: productReducer,
  products: productsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
