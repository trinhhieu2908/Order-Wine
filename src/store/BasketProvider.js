import React, { useReducer } from "react";

import BasketContext from "./basket-context";

const defaultBasketState = {
  items: [],
  totalAmount: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_BASKET") {
    const existedBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existedBasketItem = state.items[existedBasketItemIndex];

    let updatedItems;

    if (existedBasketItem) {
      const updatedItem = {
        ...existedBasketItem,
        amount: existedBasketItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existedBasketItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM_FROM_BASKET") {
    const existedBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existedBasketItem = state.items[existedBasketItemIndex];
    const updatedTotalAmount = state.totalAmount - existedBasketItem.price;
    let updatedItems;
    if (existedBasketItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existedBasketItem,
        amount: existedBasketItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existedBasketItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: +updatedTotalAmount,
    };
  }
  return defaultBasketState;
};

const BasketProvider = (props) => {
  
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasketState
  );

  const addItemToBasketHandler = (item) => {
    dispatchBasketAction({ type: "ADD_ITEM_TO_BASKET", item: item });
  };

  const removeItemFromBasketHandler = (id) => {
    dispatchBasketAction({ type: "REMOVE_ITEM_FROM_BASKET", id: id });
  };

  const basketContext = {
    items: basketState.items,
    totalAmount: basketState.totalAmount,
    addItem: addItemToBasketHandler,
    removeItem: removeItemFromBasketHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
