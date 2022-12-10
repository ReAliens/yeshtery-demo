import React from 'react';
import CartItem from '../CartItem/CartItem';
import classes from './CartDropdown.module.scss';

const CartDropdown = ({ items }) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.cart__body}>
        <h1>My Cart</h1>
        <h2>Cart Summary</h2>
        {items.map((item, index) => (
          <CartItem key={index} />
        ))}
        <p>Total: {`19,999`} LE</p>
        <div className={classes.buttons__container}>
          <button className={classes.review__button}>Review Cart</button>
          <button className={classes.checkout__button}>Compelete Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
