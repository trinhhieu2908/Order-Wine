import React, { useContext, useEffect, useState } from "react";

import styles from "./HeaderCartButton.module.css";

import BasketIcon from "../Basket/BasketIcon";
import BasketContext from "../../store/basket-context";

const HeaderCartButton = (props) => {
  
  const basketCtx = useContext(BasketContext);

  const { items: itemsBasket } = basketCtx;

  const numberOfBasketItems = itemsBasket.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const [hasAnimation, setHasAnimation] = useState(false);

  const buttonClass = `${styles.button} ${hasAnimation ? styles.bump : ""}`;

  useEffect(() => {
    if (itemsBasket.length === 0) {
      return;
    }
    setHasAnimation(true);

    const timer = setTimeout(() => {
      setHasAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer)
    };
  }, [itemsBasket]);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={styles.icon}>
        <BasketIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfBasketItems}</span>
    </button>
  );
};

export default HeaderCartButton;
