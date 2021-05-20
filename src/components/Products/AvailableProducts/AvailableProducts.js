import React from "react";

import styles from "./AvailableProducts.module.css";

import Card from "../../UI/Card";
import ProductItem from "../ProductItem/ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "2021 Caymus Vineyards",
    description:
      "Red. This French-origin grape was first made famous by the wines of Bordeaux.",
    price: 165.29,
  },
  {
    id: "p2",
    name: "Realm The Tempest 2017",
    description:
      "Blueberry, Blackberry, Black Cherry, Touch of Violets and Smoke.",
    price: 117.64,
  },
  {
    id: "p3",
    name: "Bodegas Faustino VII Tempranillo",
    description:
      "Red. This is Spain’s most planted and highly-prized red variety.",
    price: 21.54,
  },
  {
    id: "p4",
    name: "Kendall-Jackson Vintner's Reserve Chardonnay",
    description:
      "White. The world’s favorite white wine originated in Burgundy, France, where wines were traditionally aged in oak barriques (barrels).",
    price: 44.86,
  },
  {
    id: "p5",
    name: "JP. Chenet Original Cabernet - Syrah",
    description:
      "Red. Syrah originated in the Northern Rhône of France and went on to become the most popular wine in Australia (where it’s called Shiraz).",
    price: 17.95,
  },
];

const AvailableProducts = () => {
  
  const ProductsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={styles.products}>
      <Card>
        <ul>{ProductsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
