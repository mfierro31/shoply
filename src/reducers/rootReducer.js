import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import itemsReducer from './itemsReducer';

const rootReducer = combineReducers({ cart: cartReducer, items: itemsReducer });

export default rootReducer;