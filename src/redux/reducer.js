const initialState = {
  products: [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Headphones", price: 5000 },
  ],
  cart: [],
  wishlist: [],
  discount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
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
                quantity:
                  item.quantity > 1
                    ? item.quantity - 1
                    : 1,
              }
            : item
        ),
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "APPLY_COUPON":
      return {
        ...state,
        discount:
          action.payload === "SAVE10" ? 10 : 0,
      };

    default:
      return state;
  }
};

export default reducer;