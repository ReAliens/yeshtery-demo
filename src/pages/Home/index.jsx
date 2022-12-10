import React from 'react';
import {
  BrandHeader,
  Breadcrumb,
  Header,
  NavHeader,
  ProductSection,
  SimilarProducts,
} from '../../components';

const Home = () => {
  return (
    <div>
      <Header />
      <BrandHeader />
      <NavHeader />
      <Breadcrumb />
      <ProductSection />
      <SimilarProducts />
    </div>
  );
};

export default Home;
