import React from 'react';
import { productImages } from '../../constants/productImages';
import { leftArrowIcon, rightArrowIcon, view360Icon } from '../../images';
import classes from './ProductImageContainer.module.scss';

const ProductImagesContainer = () => {
  return (
    <div className={classes.images__container}>
      <div className={classes.main__image} style={{ width: '100%' }}>
        <img
          src={productImages.find((item) => item.main === true).src}
          alt="main_image"
          className={classes.main__image__item}
        />
        <div className={classes.main__image__badge}>
          <img src={view360Icon} alt="360-view" />
        </div>
      </div>
      <div className={classes.images__group}>
        <img src={leftArrowIcon} alt="left-arrow" className={classes.arrows} />
        {productImages
          .filter((item) => item.main === false)
          .map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={`${item.alt}${item.id}`}
              className={classes.images__group__items}
            />
          ))}
        <img src={rightArrowIcon} alt="righ-arrow" className={classes.arrows} />
      </div>
    </div>
  );
};

export default ProductImagesContainer;
