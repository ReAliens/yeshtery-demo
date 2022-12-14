import {
  brandIcon,
  productImage1,
  productImage2,
  productImage3,
  productImage4,
  productImage5,
  productImageColor1,
  productImageColor2,
} from '../images';

export const product = {
  id: 1,
  images: [
    {
      id: 1,
      src: productImage1,
      main: true,
      alt: 'main product image',
    },
    { id: 2, src: productImage2, main: false, alt: 'product image' },
    { id: 3, src: productImage3, main: false, alt: 'product image' },
    { id: 4, src: productImage4, main: false, alt: 'product image' },
    { id: 5, src: productImage5, main: false, alt: 'product image' },
  ],
  logo: brandIcon,
  description:
    'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  sex: 'Men',
  rate: 4,
  rateVotes: 22,
  price: '9999',
  discount: 30,
  size: 'Large',
  colors: [
    { id: 1, name: 'Black', image: productImageColor1 },
    { id: 2, name: 'Red', image: productImageColor2 },
  ],
};
