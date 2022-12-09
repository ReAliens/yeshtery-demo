import React from 'react';
import { BrandHeader, Breadcrumb, Header, NavHeader } from '../../components';

const Home = () => {
  return (
    <div>
      <Header />
      <BrandHeader />
      <NavHeader />
      <Breadcrumb />
      <h1>This is a Home page</h1>
    </div>
  );
};

export default Home;
