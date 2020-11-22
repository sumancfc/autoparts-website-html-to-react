import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsFetch } from "./actions/productAction";
import products from "../data/products.json";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

store.dispatch(productsFetch(products));

export default store;
