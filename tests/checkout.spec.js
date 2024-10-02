import { expect, test, describe, it } from 'vitest';

import { useCheckout } from '../composables/useCheckout';
import { priceList } from './fixtures';

describe('Is Scaffolded correctly', () => {
  test('Tests are working', () => {
    expect(1).toBe(1)
  })

  test('useCheckout function Exists', () => {
    expect(typeof useCheckout).toMatch("function");
  })
})

describe('Has A Checkout Composable which', () => {
  it('returns a price', () => {
    let items = ['A', 'A'];
    let { price } = useCheckout(items, priceList);
    expect(price).toBe(100)
  });

  it('Prices Items Correctly', () => {
  });
})

describe('Handles Errors by', () => {
  it('Throwing an error when items cannot be parsed correctly', () => {
      let items = ['A', 1];
      let { price } = useCheckout(items, priceList);
      expect(price).toThrowError();
  });
})

