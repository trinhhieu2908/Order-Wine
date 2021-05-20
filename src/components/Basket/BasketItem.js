import React from "react";

import styles from "./BasketItem.module.css";

const BasketItem = (props) => {
  
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles["basket-item"]}>
      <div className={styles['basket-item-info']}>
        <img src={`images/${props.id}.jpg`} alt="A product" />
        <div>
          <h2>{props.name}</h2>
          <div className={styles.summary}>
            <span className={styles.price}>{price}</span>
            <span className={styles.amount}>x {props.amount}</span>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default BasketItem;
