import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from './actions';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const clearCart = () => dispatch(emptyCart());

  window.onbeforeunload = () => window.scrollTo(0, 0);

  return (
    <div>
      <h1 className="Cart-header mb-5">My Cart</h1>
      {cartItems.length > 0 && <button className="btn btn-danger mb-5 Cart-empty-btn" onClick={clearCart}>Empty Cart</button>}
      {/* Reduces the price of all items in the cart to a total up to 2 decimal places long */}
      <h3 className="mb-5">Total: ${cartItems.reduce((acc, currVal) => acc + (currVal.qty * currVal.price), 0).toFixed(2)}</h3>
      {cartItems.length === 0 ? 
      <h5>No items in cart yet!</h5> :
      cartItems.map(item => (
        <CartItem 
          key={item.name} 
          name={item.name} 
          price={item.price} 
          description={item.description}
          img={item.image_url}
          qty={item.qty} />      
      ))}
    </div>
  )
}

export default Cart;