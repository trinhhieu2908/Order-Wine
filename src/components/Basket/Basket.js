import React, { useContext } from "react";

import styles from "./Basket.module.css";

import Modal from "../UI/Modal";
import BasketContext from "../../store/basket-context";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  
  const basketCtx = useContext(BasketContext);

  const totalAmount = `$${basketCtx.totalAmount.toFixed(2)}`;
  const hasItems = basketCtx.items.length > 0;

  const basketItemRemoveHandler = (id) => {
    basketCtx.removeItem(id)
  };

  const basketItemAddHandler = (item) => {
    basketCtx.addItem({...item, amount: 1});
  };

  const basketItems = (
    <ul className={styles["basket-items"]}>
      {basketCtx.items.map((item) => (
        <BasketItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={basketItemRemoveHandler.bind(null, item.id)}
          onAdd={basketItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {basketItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Basket;
