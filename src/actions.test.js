import { addToCart, deleteFromCart } from './actions';

const item = {
  name: 'tv',
  price: 219.99
};

describe("tests for addToCart", () => {
  test("returns correct object given an item", () => {
    expect(addToCart(item)).toEqual({ type: "ADD_TO_CART", item });
  });
});

describe("tests for deleteFromCart", () => {
  test("returns correct object given a name", () => {
    expect(deleteFromCart('tv')).toEqual({ type: "DELETE_FROM_CART", name: 'tv' });
  });
});