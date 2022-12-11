import React from 'react';
import { brandHeaderItems } from '../../constants/brandHeaderItems';
import { brandIcon, lensIcon } from '../../images';
import classes from './BrandHeader.module.scss';

const BrandHeader = ({ items, handleShowCart }) => {
  return (
    <div className={classes.header}>
      <div className={classes.header__body}>
        <div className={classes.header__input}>
          <img
            className={classes.input__icon}
            src={lensIcon}
            alt="search-icon"
          />
          <input placeholder="Search" />
        </div>
        <div className={classes.brand__logo__container}>
          <img
            className={classes.brand__logo}
            src={brandIcon}
            alt="brand-icon"
          />
        </div>
        <div className={classes.header__info}>
          <ul>
            {brandHeaderItems.map((item) =>
              item.name === 'Cart' ? (
                <li
                  key={item.id}
                  className={classes.brandHeader__cart}
                  onClick={() => handleShowCart((prev) => !prev)}
                >
                  <img src={item.icon} alt="brand-header-links" />
                  <span className={classes.cart__badge}>{items.length}</span>
                  <span className={classes.header__infoItem}>{item.name}</span>
                </li>
              ) : (
                <li key={item.id} className={classes.brandHeader__item}>
                  <img src={item.icon} alt="brand-header-links" style={{}} />
                  <span className={classes.header__infoItem}>{item.name}</span>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
