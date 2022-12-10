import React from 'react';
import classes from './Footer.module.scss';
import { yellowLogo, supscribeIcon, companyLogo } from '../../images/index';
import {
  footerLinks,
  paymentMethods,
  socialLinks,
} from '../../constants/footerLinks';
const Footer = () => {
  return (
    <div className={classes.footer__container}>
      <div className={classes.footer__body}>
        <div className={classes.footer__column__1}>
          <img src={yellowLogo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
            <br />
            <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia
            <br /> <br /> m nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          </p>
        </div>
        <div className={classes.footer__column__2}>
          <p>Subscribe to our newsletter</p>
          <div className={classes.email__input}>
            <input
              type="email"
              placeholder="Enter your Email"
              className={classes.email__input}
            />
            <button className={classes.email__button}>
              Subscribe
              <img src={supscribeIcon} alt="subscribe-button" />
            </button>
          </div>
          <div className={classes.useful__links}>
            <div className={classes.internal__links}>
              {footerLinks.map((link, index) => (
                <a key={link.id} href={link.link}>
                  {link.name}
                </a>
              ))}
            </div>
            <div className={classes.social__links}>
              {socialLinks.map((link, index) => (
                <a key={link.id} href={link.link}>
                  <img src={link.icon} alt={link.name} />
                  <span>/{link.link.split('/')[3]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer__bottom}>
        <span>© 2021 yeshtery, all rights reserved.</span>
        <div className={classes.payment}>
          {paymentMethods.map((method) => (
            <img src={method.icon} alt={method.name} />
          ))}
        </div>
        <div className={classes.company__logo}>
          <span>Powered By</span>
          <img src={companyLogo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
