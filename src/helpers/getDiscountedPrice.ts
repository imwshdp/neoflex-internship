const getDiscountedPrice = (price: number, discount: number | undefined): number => {
  const currentPrice = discount
    ? Math.round(price * (1 - discount))
    : price;
  return currentPrice;
}

export default getDiscountedPrice;