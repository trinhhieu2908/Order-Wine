import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Basket from "./components/Basket/Basket";
import BasketProvider from './store/BasketProvider'

function App() {
  
  const [basketIsShow, setBasketIsShow] = useState(false);

  const showBasketHandler = () => {
    setBasketIsShow(true);
  }

  const hideBasketHandler = () => {
    setBasketIsShow(false);
  }

  return (
    <BasketProvider>
      {basketIsShow && <Basket onClose={hideBasketHandler}/>}
      <Header onShowBasket={showBasketHandler} />
      <main>
        <Products />
      </main>
    </BasketProvider>
  );
}

export default App;
