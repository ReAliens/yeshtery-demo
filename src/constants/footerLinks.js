import {
  facebookIcon,
  instagramIcon,
  linkedInIcon,
  twitterIcon,
  cashPay,
  visaPay,
  masterCardPay,
} from '../images';

export const footerLinks = [
  { id: 1, name: 'About Us', link: '/' },
  { id: 2, name: 'Contact Us', link: '/' },
  { id: 3, name: 'Track Order', link: '/' },
  { id: 4, name: 'Terms & conditions', link: '/' },
  { id: 5, name: 'Privacy Policy', link: '/' },
  { id: 6, name: 'Sell With Us', link: '/' },
  { id: 7, name: 'Shipping And Returns', link: '/' },
];

export const socialLinks = [
  {
    id: 1,
    name: 'Facebook',
    link: 'https://www.facebook.com/YESHTERY',
    icon: facebookIcon,
  },
  {
    id: 2,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/YESHTERY',
    icon: linkedInIcon,
  },
  {
    id: 3,
    name: 'Instagram',
    link: 'https://www.instagram.com/YESHTERY',
    icon: instagramIcon,
  },
  {
    id: 4,
    name: 'Twitter',
    link: 'https://www.twitter.com/YESHTERY',
    icon: twitterIcon,
  },
];

export const paymentMethods = [
  { id: 1, name: 'Cash', link: '/', icon: cashPay },
  { id: 2, name: 'Visa', link: '/', icon: visaPay },
  { id: 3, name: 'Master-Card', link: '/', icon: masterCardPay },
];
