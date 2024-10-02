function useCheckout(productList, priceList) {
  let price = 0;
  // if () {
  //
  // }

  // for (product of productList) {
  //   price += productList[product];
  // }

  // I want to go through the price list and apply the special price
  try {
    let currentCost = productList.map(item => priceList[item].unitPrice);
    console.log(currentCost);
  } catch (error) {
    new Error("Was not able to process your item list. Please check your item list and try again");
  }

  const discountsApplied = currentCost;


  return {
    price
  }
}

export {
  useCheckout
}
