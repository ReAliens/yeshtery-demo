import React from 'react';
import {
  BrandHeader,
  Breadcrumb,
  CartDropdown,
  Footer,
  Header,
  NavHeader,
  ProductSection,
} from '../../components';
import { product } from '../../services/productApi';
import { similarProducts } from '../../services/similarProductsApi';
const SimilarProducts = React.lazy(() =>
  import('../../components/SimilarProducts/SimilarProducts'),
);

const Home = () => {
  const cartItems = [];
  return (
    <>
      <Header />
      <BrandHeader />
      <NavHeader />
      <Breadcrumb />
      <ProductSection product={product} />
      <SimilarProducts similarProducts={similarProducts} />
      <Footer />
      <CartDropdown items={cartItems} />
    </>
  );
};

export default Home;
