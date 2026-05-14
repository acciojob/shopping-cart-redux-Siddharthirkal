import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <h3 className="text-center">Shopping Cart</h3>
      </nav>

      <div className="container">
        <ProductList />
        <Cart />
        <Wishlist />
      </div>
    </div>
  );
}

export default App;