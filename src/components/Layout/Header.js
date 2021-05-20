import React from "react";

import styles from './Header.module.css';

import wineBackground from "../../assets/wine-background.jpg";
import HeaderBasketButton from './HeaderBasketButton';



const Header = (props) => {
  
  return (
    <>
      <header className={styles.header}>
        <h1>Wine Shop</h1>
        <HeaderBasketButton onClick={props.onShowBasket}/>
      </header>
      <div className={styles['background-image']}>
        <img src={wineBackground} alt="A wine background" />
      </div>
    </>
  );
};

export default Header;
