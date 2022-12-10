import React from 'react';
import classes from './CartItem.module.scss';

const CartItem = ({ item }) => {
  const { id, image, description, price, quantity } = item;
  return (
    <div className={classes.card}>
      <img src={image} alt={`item-${id}`} />
      <div className={classes.item__info}>
        <p>{description}</p>
        <span> Quantity: {quantity} </span>
        <div className={classes.price__container}>
          <span className={classes.item__price}>{price} LE</span>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
