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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      showCart: false,
    };
  }

  handleShowCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  handleAddToCart = (item) => {
    if (this.state.cartItems.length > 0) {
      const itemExists = this.state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (itemExists) {
        const updatedCartItems = this.state.cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
        return this.setState({ cartItems: updatedCartItems });
      }
    }
    this.setState({
      cartItems: [...this.state.cartItems, { ...item, quantity: 1 }],
    });
  };

  render() {
    return (
      <>
        <Header />
        <BrandHeader
          items={this.state.cartItems}
          handleShowCart={this.handleShowCart}
        />
        <NavHeader />
        <Breadcrumb />
        <ProductSection product={product} addItem={this.handleAddToCart} />
        <SimilarProducts similarProducts={similarProducts} />
        <Footer />
        {this.state.showCart && (
          <CartDropdown
            items={this.state.cartItems}
            handleShowCart={this.handleShowCart}
          />
        )}
      </>
    );
  }
}

export default Home;
