import React from 'react';
import {
  BrandHeader,
  Breadcrumb,
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
  return (
    <div>
      <Header />
      <BrandHeader />
      <NavHeader />
      <Breadcrumb />
      <ProductSection product={product} />
      <SimilarProducts similarProducts={similarProducts} />
      <Footer />
    </div>
  );
};

export default Home;
