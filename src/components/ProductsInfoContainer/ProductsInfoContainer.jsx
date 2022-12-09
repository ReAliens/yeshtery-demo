import React from 'react';
import { sizes } from '../../constants/sizes';
import { addCommaToNumber } from '../../helpers/addCommaToNumber';
import { lastPrice } from '../../helpers/lastPrice';
import {
  goldStartIcon,
  minusSignIcon,
  plusSignIcon,
  whiteStarICon,
} from '../../images';
import { product } from '../../services/productApi';
import classes from './ProductsInfoContainer.module.scss';

const ProductsInfoContainer = () => {
  const listPrice = lastPrice(product.price, product.discount);
  const price = addCommaToNumber(product.price);
  const modListPrice = addCommaToNumber(listPrice);
  return (
    <div className={classes.info__container}>
      <div className={classes.main__info}>
        <img src={product.logo} alt="logo" />
        <p className={classes.description}>{product.description}</p>
        <span className={classes.gender}>{product.sex}</span>
        <div className={classes.product__rates__info}>
          <div className={classes.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                <img
                  src={i < product.rate ? goldStartIcon : whiteStarICon}
                  alt="rate"
                />
              </span>
            ))}
          </div>
          <span>{product.rate}.0 of 5 </span>
          <span className={classes.rateVotes}>{product.rateVotes} Rates</span>
        </div>
        <div className={classes.product__prices_info}>
          <div>
            <span>{price}</span>
            <span className={classes.currency}>LE</span>
          </div>

          <span className={classes.list__price}>{modListPrice}LE</span>
          <span>{product.discount}% Off</span>
        </div>
      </div>
      <div className={classes.size__container}>
        <h1>Size</h1>
        <div className={classes.sizes__container}>
          {sizes.map((size) => (
            <span
              className={classes.size__item}
              style={{
                backgroundColor: product.size === size.name ? '#ECECEC' : '',
                color: product.size === size.name ? '#000' : '',
              }}
              key={size.id}
            >
              {size.name}
            </span>
          ))}
        </div>
      </div>
      <div className={classes.colors__container}>
        <h1>Color</h1>
        <div className={classes.color__container}>
          {product.colors.map((color, index) => (
            <div key={color.id}>
              <img
                src={color.image}
                alt={color.name}
                style={{
                  border: color.id === 1 ? '1px solid #542e90' : '',
                  borderRadius: '50%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.quantity__container}>
        <h1>Quantity</h1>
        <div className={classes.quantity__function__bar}>
          <button>
            <img src={minusSignIcon} alt="dec-quantity" />
          </button>
          1
          <button>
            <img src={plusSignIcon} alt="inc-quantity" />
          </button>
        </div>
      </div>
      <div className={classes.buttons__container}>
        <button>Add to Cart</button>
        <button>Pickup From Store</button>
      </div>
    </div>
  );
};

export default ProductsInfoContainer;
