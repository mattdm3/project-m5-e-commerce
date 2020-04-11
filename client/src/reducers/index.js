import { combineReducers } from 'redux';
import items from './items-reducer';
import cart from './cart-reducer';

export default combineReducers({ items, cart })

