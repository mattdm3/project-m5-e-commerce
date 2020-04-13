import styled from 'styled-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsSelector, cartTotalSelector } from '../reducers/cart-reducer';
import { clearCart } from '../actions';


// ------------ COMPONENTS ------------
import CartItem from './CartItem';
//-------------------------------------

//````````````` FEEL FREE TO CHANGE THIS UP AND USE GRIDS `````````````

const Cart = (props) => {
    const dispatch = useDispatch();

    const state = useSelector(state => itemsSelector(state.cartState));
    const total = useSelector(state => cartTotalSelector(state.cartState));
    
    return (
        <Wrapper>
            <Container>
                <Products>
                    <GreyP>Products</GreyP>
                </Products>
                <Details>
                    <GreyP>Price</GreyP>
                    <GreyP>Quantity</GreyP>
                    <GreyP>Subtotal</GreyP>
                </Details>
            </Container>
            <Bordered>
                {state.map((item) => <CartItem key={item.id} {...item}/>)}
            </Bordered>
            <Total>
                <GreyP>Shipping:</GreyP>
                <p style={{ margin: "0 20px" }}>$9.43 CAD</p>
                <GreyP>Total Calculated:</GreyP>
                <p style={{ margin: "0 20px" }}>{total}</p>
            </Total>
            <button onClick={() => dispatch(clearCart(props.item))}>Clear Cart</button>
        </Wrapper>
    )
};

//------------------ STYLES ------------------

const Wrapper = styled.div`
    padding: 30px;
`;

const Container = styled.div`
    display: flex;
`;

const Products = styled.div`
    flex-grow: 3;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
`;

const GreyP = styled.p`
    color: grey;
    margin: 0 20px;
`;

const Bordered = styled.div`
    border-top: 1px solid grey;
`;

const Total = styled.div`
    border-top: 1px solid grey;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default Cart;

