function useCheckout(productList, priceList) {
  let price = 0;

  for (product of productList) {
    price += productList[product];
  }

  return {
    price
  }
}

export {
  useCheckout
}
