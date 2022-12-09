import React from 'react';
import { breadcrumbItems } from '../../constants/breadcrumbItems';
import classes from './Breadcrumb.module.scss';

const Breadcrumb = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__body}>
        {breadcrumbItems.map((item, index) => (
          <nav>
            {item.name}&nbsp; {index === breadcrumbItems.length - 1 ? '' : '/'}{' '}
            &nbsp;
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
