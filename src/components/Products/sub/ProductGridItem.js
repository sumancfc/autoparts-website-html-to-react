import React from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { getDiscount } from "../../../helpers/products";

const ProductGridItem = ({ product }) => {
  const { addToast } = useToasts();

  const discountPrice = getDiscount(product.price, product.discount);
  const finalPrice = Number(product.price).toFixed(2);
  const finalDiscountPrice = Number(discountPrice).toFixed(2);

  return (
    <div className='col'>
      <div className='product-item'>
        <div className='product-item__thumb'>
          <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
            <img
              className='thumb-primary'
              src={product.image[0]}
              alt={product.name}
            />
            <img
              className='thumb-secondary'
              src={product.image[1]}
              alt={product.name}
            />
          </Link>
        </div>

        <div className='product-item__content'>
          <div className='ratting'>
            <span>
              <i className='ion-android-star'></i>
            </span>
            <span>
              <i className='ion-android-star'></i>
            </span>
            <span>
              <i className='ion-android-star'></i>
            </span>
            <span>
              <i className='ion-android-star'></i>
            </span>
            <span>
              <i className='ion-android-star-half'></i>
            </span>
          </div>
          <h4 className='title'>
            <Link to={process.env.PUBLIC_URL + "/product/" + product.id}>
              {product.name}
            </Link>
          </h4>
          {discountPrice !== null ? (
            <span className='price'>
              <strong>Price:</strong>${finalDiscountPrice}
            </span>
          ) : (
            <span className='price'>
              <strong>Price:</strong>${finalPrice}
            </span>
          )}
        </div>

        <div className='product-item__action'>
          <button className='btn-add-to-cart'>
            <i className='fa fa-shopping-cart'></i>
          </button>
          <button className='btn-add-to-cart'>
            <i className='fa fa-refresh'></i>
          </button>
          <button className='btn-add-to-cart'>
            <i className='fa fa-heart-o'></i>
          </button>
        </div>

        {product.discount && product.discount > 0 ? (
          <div className='product-item__sale'>
            <span className='sale-txt'>{product.discount}%</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductGridItem;
