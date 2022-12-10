import React from 'react';
import {
  BrandHeader,
  Breadcrumb,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
