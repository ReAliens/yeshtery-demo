import React from 'react';
import ProductImagesContainer from '../ProductImagesContainer/ProductImagesContainer';
import classes from './ProductSection.module.scss';
const ProductSection = () => {
  return (
    <section className={classes.section__container}>
      <div className={classes.section__body}>
        <ProductImagesContainer />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          obcaecati quasi laudantium ducimus modi dicta quis in! Tempora
          corrupti odio voluptatibus et aliquam vero porro necessitatibus
          accusamus nesciunt. Ea, molestias?
        </p>
      </div>
    </section>
  );
};

export default ProductSection;
