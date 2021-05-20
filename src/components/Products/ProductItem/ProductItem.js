import React, { useContext } from "react";

import styles from "./ProductItem.module.css";

import ProductItemForm from "./ProductItemForm";
import BasketContext from "../../../store/basket-context";

const ProductItem = (props) => {
  
  const basketCtx = useContext(BasketContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToBasketHandler = (amount) => {
    basketCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.product}>
      <div className={styles['product-info']}>
        <img src={`images/${props.id}.jpg`} alt="A product" />
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{price}</div>
        </div>
      </div>
      <div>
        <ProductItemForm id={props.id} onAddToBasket={addToBasketHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
