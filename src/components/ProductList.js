import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
} from "../redux/actions";

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products
  );

  return (
    <div>
      <h2>All Products</h2>

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="custom-card card"
          >
            <div className="card-body">
              <img
                src={product.image}
                alt={product.name}
                className="product-image" width={100}
              />

              <h5>{product.name}</h5>

              <p>₹ {product.price}</p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  dispatch(addToCart(product))
                }
              >
                Add To Cart
              </button>

              <button
                className="btn"
                onClick={() =>
                  dispatch(addToWishlist(product))
                }
              >
                Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;