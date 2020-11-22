import { FETCH_PRODUCTS_SUCCESS } from "../types";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
