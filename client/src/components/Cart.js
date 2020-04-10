import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { getStoreItemArray } from '../reducers/index';


// ------------ COMPONENTS ------------
import StoreItems from './StoreItem';


const Cart = () => {
    const state = useSelector(getStoreItemArray);
    return (
        <Wrapper>
          {/* Your stuff here */}
        </Wrapper>
    )
};

export default Cart;