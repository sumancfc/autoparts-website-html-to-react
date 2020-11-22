import React from "react";
import { connect } from "react-redux";
import ProductGridItem from "./ProductGridItem";
import { getProducts } from "../../../helpers/products";

const ProductGridItems = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <ProductGridItem key={product.id} product={product} />;
      })}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: getProducts(
      state.productsList.products,
      ownProps.category,
      ownProps.limit,
      ownProps.type
    ),
  };
};

export default connect(mapStateToProps)(ProductGridItems);
