import React, { useRef, useState } from "react";

import styles from "./ProductItemForm.module.css";

import Input from "../../UI/Input";

const ProductFormItem = (props) => {
  
  const [amountIdValid, setAmountIdValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIdValid(false);
      return;
    }

    props.onAddToBasket(enteredAmountNumber)
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIdValid && <p>Please enter a valid number between 1 and 10</p>}
    </form>
  );
};

export default ProductFormItem;
