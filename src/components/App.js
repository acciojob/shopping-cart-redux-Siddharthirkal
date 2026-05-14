import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function App() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <ProductList />
      <Cart />
      <Wishlist />
    </div>
  );
}

export default App;