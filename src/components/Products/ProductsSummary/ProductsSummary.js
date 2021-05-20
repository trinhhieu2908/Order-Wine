import styles from './ProductsSummary.module.css';

const ProductsSummary = () => {
  
  return (
    <section className={styles.summary}>
      <h2>Small-production and organic wines delivered to your doorstep</h2>
      <p>
        Choose your favorite product from our broad selection of available wine
        and enjoy it for dinner at home.
      </p>      
    </section>
  );
};

export default ProductsSummary;