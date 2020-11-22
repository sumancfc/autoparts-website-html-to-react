import React from "react";
import SectionTitle from "../Title";
import ProductGridItems from "./sub/ProductGridItems";

const ProductGrid = ({ category, limit }) => {
  return (
    <div className='products-area-wrapper sm-top'>
      <div className='container container-wide'>
        <SectionTitle
          title='All Of Our Products'
          desc='All best seller product are now available for you and your can buy
            this product from here any time any where so sop now'
        />

        <div className='row'>
          <div className='col-12'>
            <div className='product-wrapper columns-5'>
              <ProductGridItems
                category={category}
                limit={limit}
                type='bestSeller'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
