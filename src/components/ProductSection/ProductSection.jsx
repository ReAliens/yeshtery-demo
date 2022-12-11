import React from 'react';
import ProductImagesContainer from '../ProductImagesContainer/ProductImageContainer';
import ProductsInfoContainer from '../ProductsInfoContainer/ProductsInfoContainer';
import classes from './ProductSection.module.scss';
const ProductSection = ({ product, addItem }) => {
  return (
    <section className={classes.section__container}>
      <div className={classes.section__body}>
        <ProductImagesContainer product={product} />
        <ProductsInfoContainer product={product} addToCart={addItem} />
      </div>
    </section>
  );
};

export default ProductSection;
