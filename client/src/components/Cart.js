import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
// import { getStoreItemArray } from '../reducers/cart-reducer';


// ------------ COMPONENTS ------------
import Items from './Item/Item';
import CartItem from './CartItem';
//-------------------------------------

//````````````` FEEL FREE TO CHANGE THIS UP AND USE GRIDS `````````````

const Cart = () => {
    // const state = useSelector(getStoreItemArray);
    // console.log('~~ state Cart.js ~~ ', state);
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
                {/* {state.map((item) => <CartItem key={item} {...item}/>)} */}
            </Bordered>
            <Total>
                <GreyP>Shipping:</GreyP>
                <p style={{ margin: "0 20px" }}>$9.43 CAD</p>
                <GreyP>Total Calculated:</GreyP>
                <p style={{ margin: "0 20px" }}>Total Calculated</p>
            </Total>
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

