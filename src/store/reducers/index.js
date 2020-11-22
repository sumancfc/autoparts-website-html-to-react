import { combineReducers } from "redux";
import productsReducer from "./productReducer";

const rootReducer = combineReducers({
  productsList: productsReducer,
});

export default rootReducer;
