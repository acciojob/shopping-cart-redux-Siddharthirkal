import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  applyCoupon,
} from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cart
  );

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="custom-card"
        >
          <div className="card-body">
            <h5>{item.name}</h5>

            <p>Quantity: {item.quantity}</p>

            <button
              className="btn"
              onClick={() =>
                dispatch(
                  increaseQuantity(item.id)
                )
              }
            >
              +
            </button>

            <button
              className="btn"
              onClick={() =>
                dispatch(
                  decreaseQuantity(item.id)
                )
              }
            >
              -
            </button>

            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch(
                  removeFromCart(item.id)
                )
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;