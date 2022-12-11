import React from 'react';
import { addCommaToNumber } from '../../helpers/addCommaToNumber';
import CartItem from '../CartItem/CartItem';
import classes from './CartDropdown.module.scss';

const CartDropdown = ({ items, handleShowCart }) => {
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <div className={classes.overlay} onClick={() => handleShowCart()}>
      <div className={classes.cart__body}>
        <span
          onClick={() => handleShowCart(false)}
          className={classes.close__button}
        >
          X
        </span>
        <h1>My Cart</h1>
        <h2>Cart Summary</h2>
        {items.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        <p>Total: {addCommaToNumber(totalPrice)} LE</p>
        <div className={classes.buttons__container}>
          <button className={classes.review__button}>Review Cart</button>
          <button className={classes.checkout__button}>
            Compelete Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
