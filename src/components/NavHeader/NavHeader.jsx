import React from 'react';
import { navHeaderItems } from '../../constants/navHeaderItems';
import classes from './NavHeader.module.scss';

const NavHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__body}>
        <ul>
          {navHeaderItems.map((item) => (
            <li key={item.id}>
              <nav>{item.title}</nav>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavHeader;
