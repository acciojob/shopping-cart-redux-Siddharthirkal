import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
} from "../redux/actions";

const ProductList = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>

          <button
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              dispatch(addToWishlist(product))
            }
          >
            Wishlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;