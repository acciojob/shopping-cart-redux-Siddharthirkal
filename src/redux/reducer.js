const initialState = {
  products: [
    {
      id: 1,
      name: "Blue Denim Shirt",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    },
    {
      id: 2,
      name: "Red Hoodie",
      price: 3599,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },
    {
      id: 3,
      name: "Navy T-Shirt",
      price: 1599,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 4,
      name: "Black Chino Pants",
      price: 6999,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1",
    },
  ],
  cart: [],
  wishlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            item.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: Math.max(
                  item.quantity - 1,
                  1
                ),
              }
            : item
        ),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          action.payload,
        ],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist:
          state.wishlist.filter(
            (item) =>
              item.id !== action.payload
          ),
      };

    default:
      return state;
  }
};

export default reducer;