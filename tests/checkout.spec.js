import { expect, test, describe } from 'vitest';

import { ICheckout } from '../composables/ICheckout';

describe('Checkout', () => {
  test('Tests are working', () => {
    expect(1).toBe(1)
  })

  test('ICheckout function Exists', () => {
    expect(typeof ICheckout).toMatch("function");
  })

  // it('', () => {
  //
  // });
})
