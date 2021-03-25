import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';

export const addToCart = item => ({ type: ADD_TO_CART, item });
export const deleteFromCart = (name, ignoreQty = false) => ({ type: DELETE_FROM_CART, name, ignoreQty });