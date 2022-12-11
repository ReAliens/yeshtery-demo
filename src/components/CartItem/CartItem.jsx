import React from 'react';
import { addCommaToNumber } from '../../helpers/addCommaToNumber';
import classes from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const { id, images, description, price, quantity } = item;
  return (
    <div className={classes.card}>
      <img src={images[0].src} alt={`item-${id}`} />
      <div className={classes.item__info}>
        <p className={classes.item__desc}>{description}</p>
        <span> Quantity: {quantity} </span>
        <div className={classes.price__container}>
          <span className={classes.item__price}>{addCommaToNumber(price)}
          <span className={classes.currency__symbol}> LE</span>
          </span>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
