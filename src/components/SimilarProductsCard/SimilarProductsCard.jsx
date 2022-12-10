import React from 'react';
import classes from './SimilarProductsCard.module.scss';
import {
  brandIcon,
  goldStartIcon,
  small360ViewIcon,
  whiteStarICon,
} from '../../images';
import { addCommaToNumber } from '../../helpers/addCommaToNumber';
const SimilarProductsCard = ({ item }) => {
  const {
    image,
    description,
    price,
    rate,
    pickup,
    listPrice,
    discount,
    from,
    to,
    duration,
  } = item;
  return (
    <div className={classes.card}>
      <div className={classes.main__image} style={{ width: '100%' }}>
        <img
          src={image}
          alt="main_image"
          className={classes.main__image__item}
        />
        <div className={classes.main__image__badge}>
          <img
            src={small360ViewIcon}
            alt="360-view"
            className={classes.badge}
          />
        </div>
      </div>
      <p className={classes.description}>{description}</p>
      <div className={classes.product__info}>
        <div className={classes.prices__container}>
          <div className={classes.curr__price}>
            <span>{addCommaToNumber(price)}</span>
            <span className={classes.currency}>LE</span>
          </div>
          {listPrice !== 0 && (
            <div className={classes.last__price__container}>
              <div className={classes.last__price}>
                <span>{addCommaToNumber(listPrice)}</span>
                <span className={classes.currency__list}>LE</span>
              </div>
              <h5>{discount}%</h5>
            </div>
          )}
        </div>
        <img src={brandIcon} alt="logo" />
      </div>
      <div className={classes.product__rates__info}>
        <div className={classes.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>
              <img src={i < rate ? goldStartIcon : whiteStarICon} alt="rate" />
            </span>
          ))}
        </div>
        <span>{rate}.0 of 5 </span>
      </div>
      {pickup !== '' ? (
        <div className={classes.pickup__container}>
          Pickup From:
          <span>{pickup}</span>
        </div>
      ) : (
        <div className={classes.location__info}>
          <span>
            From: <strong>{from}</strong>
          </span>
          <span>
            To: <strong>{to}</strong>
          </span>
          <span>
            In: <strong>{duration}</strong>
          </span>
        </div>
      )}
    </div>
  );
};

export default SimilarProductsCard;
