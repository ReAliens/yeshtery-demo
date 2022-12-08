import React from 'react';
import { headerItems } from '../../constants/headerItems';
import { leftArrowIcon, logo, menuIcon, rightArrowIcon } from '../../images';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__body}>
        <div className={classes.header__logo}>
          <img src={menuIcon} alt="menu-icon" />
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.header__announcement}>
          <img src={leftArrowIcon} alt="left-arrow-icon" />
          <span>
            Valentine’s Day Offers! Buy Two Get One Free{' '}
            <strong>
              <u>
                <a href="/">Shop Now</a>
              </u>
            </strong>
          </span>
          <img src={rightArrowIcon} alt="right-arrow-icon" />
        </div>
        <div className={classes.header__info}>
          <ul>
            {headerItems.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt="info-icon" />
                <span className={classes.header__infoItem}>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
