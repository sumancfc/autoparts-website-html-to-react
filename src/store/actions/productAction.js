import { FETCH_PRODUCTS_SUCCESS } from "../types";

const productsFetchSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

// get products
export const productsFetch = (products) => {
  return (dispatch) => {
    dispatch(productsFetchSuccess(products));
  };
};
