import { combineReducers } from 'redux';
import items from './items-reducer';
import cartReducer from './cart-reducer';

export default combineReducers({ 
    cartState: cartReducer,
    items, cartReducer, 
});

