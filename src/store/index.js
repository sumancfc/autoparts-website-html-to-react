import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

export default store;
