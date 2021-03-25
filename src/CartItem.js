import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from './actions';
import './CartItem.css';

const CartItem = ({ name, price, description, img, qty }) => {
  const dispatch = useDispatch();

  const add = () => dispatch(addToCart({ name, price, description, image_url: img, qty }));
  const remove = () => dispatch(deleteFromCart(name));
  const removeIgnoreQty = () => dispatch(deleteFromCart(name, true));

  const handleChange = evt => {
    const value = +evt.target.value;
    if (value > qty) {
      add();
    } else {
      remove();
    }
  }

  return (
    <div className="mb-5">
      <h1 className="m">{name.toUpperCase()}</h1>
      <div className="CartItem-img">
        <img src={img} alt={name} />
      </div>
      <p className="mt-3">${price}</p>
      <p>{description}</p>
      <label htmlFor="qty" className="form-label">Quantity:</label>
      <div className="CartItem-input">
        <input type="number" id="qty" value={qty} onChange={handleChange} min="1" className="form-control mb-3" />
      </div>
      <button onClick={removeIgnoreQty} className="btn btn-danger">Delete from cart</button>
    </div>
  )
}

export default CartItem;