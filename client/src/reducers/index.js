import { combineReducers } from 'redux';
import items from './items-reducer';
import cart from './cart-reducer';
import dataItems from './dataItems-reducer';

export default combineReducers({ items, cart, dataItems })

