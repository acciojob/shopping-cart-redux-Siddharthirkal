import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/actions";

const Wishlist = () => {
  const { wishlist } = useSelector(
    (state) => state
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <button
            onClick={() =>
              dispatch(removeFromWishlist(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;