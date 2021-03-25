import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, deleteFromCart } from './actions';
import './Item.css';

const Item = ({ id, name, img, price }) => {
  const items = useSelector(store => store.items, shallowEqual);
  const cartItems = useSelector(store => store.cart, shallowEqual);
  const dispatch = useDispatch();

  const add = () => dispatch(addToCart(items[id]));
  // This function is tricky, because we have to think of something that can be associated both with this individual item
  // and the same item multiple times in someone's cart.  It can't be the ids, so we can resort to the product name.  And in
  // our rootReducer, we'll make it so that we find the first instance of that product name in the cart array and delete it.
  const remove = () => dispatch(deleteFromCart(name));

  return (
    <li className="Item">
      <div className="Item-img">
        <NavLink to={`/products/${id}`}><img src={img} alt={`${name}`} /></NavLink>
      </div>
      <p className="mt-3">{name}</p>
      <p>${price}</p>    
      <button onClick={add} className="btn btn-primary">Add to cart</button>
      {cartItems.find(item => item.name === name) && 
      <button onClick={remove} className="btn btn-danger ml-3">Delete from cart</button>}      
    </li>
  )
}

export default Item;