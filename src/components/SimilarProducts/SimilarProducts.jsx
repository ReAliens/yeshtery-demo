import React from 'react';
import { similarProducts } from '../../services/similarProductsApi';
import SimilarProductsCard from '../SimilarProductsCard/SimilarProductsCard';
import classes from './SimilarProducts.module.scss';

const SimilarProducts = () => {
  return (
    <div className={classes.section__container}>
      <div className={classes.section__body}>
        <h1>Similar Products</h1>
        <h3>You may like these products also</h3>
        <div className={classes.cards__container}>
          {similarProducts.map((item) => (
            <SimilarProductsCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
