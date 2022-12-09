import React from 'react';
import {
  BrandHeader,
  Breadcrumb,
  Header,
  NavHeader,
  ProductSection,
} from '../../components';

const Home = () => {
  return (
    <div>
      <Header />
      <BrandHeader />
      <NavHeader />
      <Breadcrumb />
      <ProductSection />
    </div>
  );
};

export default Home;
