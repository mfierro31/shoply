import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, deleteFromCart } from './actions';

const ItemDetail = () => {
  const { id } = useParams();
  const items = useSelector(store => store.items);
  const cartItems = useSelector(store => store.cart);
  const item = items[id];
  const dispatch = useDispatch();

  const add = () => dispatch(addToCart(item));
  
  const remove = () => dispatch(deleteFromCart(item.name));

  return (
    <div>
      <h1 className="ItemDetail-header">{item.name.toUpperCase()}</h1>
      <div className="ItemDetail-img">
        <img src={item.image_url} alt={`${item.name}`} />
      </div>
      <p className="mt-4">${item.price}</p>
      <p>{item.description}</p>
      <button onClick={add} className="btn btn-primary">Add to cart</button>
      {cartItems.find(cartItem => cartItem.name === item.name) && 
      <button onClick={remove} className="btn btn-danger ml-3">Delete from cart</button>}
    </div>
  )
}

export default ItemDetail;