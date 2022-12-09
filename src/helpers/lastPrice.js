export const lastPrice = (price, discount) => {
  let listPrice = 0;
  const salePrice = price;

  if (discount > 0) {
    listPrice = salePrice / (1 - discount / 100);
  }
  return listPrice.toFixed(0);
};
