import React from 'react';
import ProductImagesContainer from '../ProductImagesContainer/ProductImageContainer';
import ProductsInfoContainer from '../ProductsInfoContainer/ProductsInfoContainer';
import classes from './ProductSection.module.scss';
const ProductSection = ({ product }) => {
  return (
    <section className={classes.section__container}>
      <div className={classes.section__body}>
        <ProductImagesContainer product={product} />
        <ProductsInfoContainer />
      </div>
    </section>
  );
};

export default ProductSection;
