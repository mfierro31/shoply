const INITIAL_STATE = JSON.parse(window.localStorage.getItem('cart')) || [];

function cart(state = INITIAL_STATE, action) {
  let cartCopy;
  let itemIndex;

  switch(action.type) {
    case "ADD_TO_CART":
      cartCopy = [...state];
      itemIndex = cartCopy.findIndex(item => item.name === action.item.name);

      if (itemIndex === -1) {
        // if item doesn't exist, we add it to the cart array
        const newCart = [...cartCopy, { ...action.item, qty: 1 }];
        window.localStorage.setItem('cart', JSON.stringify(newCart));
        return newCart;
      } else {
        // if it does exist, we just increase its quantity
        cartCopy[itemIndex].qty += 1;
        window.localStorage.setItem('cart', JSON.stringify(cartCopy));
        return cartCopy;
      }
    case "DELETE_FROM_CART":
      cartCopy = [...state];
      itemIndex = cartCopy.findIndex(item => item.name === action.name);
      
      if (itemIndex === -1) {
        // if the item doesn't exist, just return existing state
        return state;
      } else if (cartCopy[itemIndex].qty === 1 || action.ignoreQty) {
        // if the item exists and its quantity is only 1, or if we're ignoring quantity, then just delete it from the array
        cartCopy.splice(itemIndex, 1);
        window.localStorage.setItem('cart', JSON.stringify(cartCopy));
        return cartCopy;
      } else if (cartCopy[itemIndex].qty > 1) {
        // if the item exists and its quantity is greater than 1, just subtract 1 from the quantity
        cartCopy[itemIndex].qty -= 1;
        window.localStorage.setItem('cart', JSON.stringify(cartCopy));
        return cartCopy;
      }
      break;
    default:
      return state;
  }
}

export default cart;