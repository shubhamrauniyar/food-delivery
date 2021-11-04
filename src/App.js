import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";
import ReactDOM from "react-dom";
function App() {
  const [cartStatus, setCartStatus] = useState(false);
  const onCloseClick = () => {

    setCartStatus((prevstate) => {
      return !prevstate;
    });
  };
  const cartClickHandler = () => {
    setCartStatus(true);
  };

  return (
    <CartProvider>
      <React.Fragment>
        {cartStatus && <Cart onCloseClick={onCloseClick}></Cart>}
        <Header onClickCart={cartClickHandler}></Header>
        <Meals></Meals>
      </React.Fragment>
    </CartProvider>
  );
}

export default App;
