import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  applyCoupon,
} from "../redux/actions";

const Cart = () => {
  const { cart, discount } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const finalTotal =
    total - (total * discount) / 100;

  return (
    <div>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          {item.quantity}

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <input
        type="text"
        placeholder="Coupon"
        value={coupon}
        onChange={(e) =>
          setCoupon(e.target.value)
        }
      />

      <button
        onClick={() =>
          dispatch(applyCoupon(coupon))
        }
      >
        Apply Coupon
      </button>

      <h3>Total: ₹{finalTotal}</h3>
    </div>
  );
};

export default Cart;