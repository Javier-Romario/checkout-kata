import { expect, test, describe, it } from 'vitest';

import { useCheckout } from '../composables/useCheckout';
import { priceList } from './fixtures';

describe('Checkout', () => {
  test('Tests are working', () => {
    expect(1).toBe(1)
  })

  test('ICheckout function Exists', () => {
    expect(typeof ICheckout).toMatch("function");
  })

  it('Prices Items Correctly', () => {
    let items = ['A', 'A', 'C', 'D', 'B'];
    let { price } = useCheckout(items, priceList);
  });

  it('returns a price', () => {

  });
})
