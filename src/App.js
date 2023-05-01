import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { ProductContext } from "./contexts/ProductContext";
import {CartContext} from "./contexts/CartContext"
// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = React.useState(data);
  const [cart, setCart] =React.useState([]);

  const addItem = (item) => {
    const newCart= [ 
      ...cart,
    item];
    setCart(newCart);

    // verilen itemi sepete ekleyin
  };

  const removeItem=(id)=>{
    const newCart= cart.filter((item)=>item.id !==id);
    setCart(newCart);

  };

  return (
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{cart, removeItem}}>
    <div className="App">
      <Navigation  />

      {/* Routelar */}
      <main className="content">
      <Route exact path="/">
  <Products />
</Route>

        <Route path="/cart">
          <ShoppingCart/>
        </Route>
      </main>
    </div>
      </CartContext.Provider>
      </ProductContext.Provider>
  );
}

export default App;
