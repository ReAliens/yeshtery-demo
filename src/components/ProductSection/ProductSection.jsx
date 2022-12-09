import React from 'react';
import ProductImagesContainer from '../ProductImagesContainer/ProductImageContainer';
import ProductsInfoContainer from '../ProductsInfoContainer/ProductsInfoContainer';
import classes from './ProductSection.module.scss';
const ProductSection = () => {
  return (
    <section className={classes.section__container}>
      <div className={classes.section__body}>
        <ProductImagesContainer />
        <ProductsInfoContainer />
      </div>
    </section>
  );
};

export default ProductSection;
