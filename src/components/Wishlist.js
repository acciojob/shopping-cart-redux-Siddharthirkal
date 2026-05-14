import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/actions";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist
  );

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="custom-card"
        >
          <div className="card-body">
            <h5>{item.name}</h5>

            <button
              className="btn"
              onClick={() =>
                dispatch(
                  removeFromWishlist(item.id)
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


export default Wishlist;