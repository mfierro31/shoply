import cartReducer from './cartReducer';
import { addToCart, deleteFromCart } from '../actions';

const item = {
  name: 'tv',
  price: 219.99
};

describe("cartReducer tests", () => {
  test("ADD_TO_CART works for new item", () => {
    expect(cartReducer(undefined, addToCart(item))).toEqual([{ ...item, qty: 1 }]);
  });

  test("ADD_TO_CART works for existing item", () => {
    expect(cartReducer([{ ...item, qty: 1 }], addToCart(item))).toEqual([{ ...item, qty: 2 }]);
  });

  test("DELETE_FROM_CART works for existing item with qty > 1", () => {
    expect(cartReducer([{ ...item, qty: 2 }], deleteFromCart('tv'))).toEqual([{ ...item, qty: 1 }]);
  });

  test("DELETE_FROM_CART works for existing item with qty === 1", () => {
    expect(cartReducer([{ ...item, qty: 1 }], deleteFromCart('tv'))).toEqual([]);
  });

  test("DELETE_FROM_CART just returns unaltered state if item doesn't exist", () => {
    expect(cartReducer(undefined, deleteFromCart('tv'))).toEqual([]);
  });
});