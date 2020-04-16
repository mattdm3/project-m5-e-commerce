import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsSelector, cartTotalSelector, getItemsAndQuantities } from '../reducers/cart-reducer';
import { clearCart } from '../actions';


// ------------ COMPONENTS ------------
import CartItem from './CartItem';
import { Redirect } from 'react-router-dom';
//-------------------------------------

//````````````` FEEL FREE TO CHANGE THIS UP AND USE GRIDS `````````````

const Cart = () => {
    const [coupon, setCoupon] = useState("❔")
    const dispatch = useDispatch();

    const state = useSelector(state => itemsSelector(state.cartState));
    const total = useSelector(state => cartTotalSelector(state.cartState));
    const purchaseBag = useSelector(state => getItemsAndQuantities(state.cartState));
    console.log('purchaseBag: ', purchaseBag);
    

    const handleInventory = (event) => {
        dispatch(clearCart());

        // <Redirect to="/paymentMethod" />
    }

    const handleCoupon = async (event) => {
        event.preventDefault();
        await console.log('clicked')
        //fetch
        //inner text changes to ❌ or ✔ depending on if coupon is good
        if (1>2) { //fix condition according to fetch
            setCoupon("❌")
        } else {
            setCoupon("✔")
        }
    }

    return (
        <Wrapper>
            <Container>
                <div style={{ gridArea: "1 / 1 / 2 / 4" }}>
                    <GreyP>Products</GreyP>
                </div>
                <div style={{ gridArea: "1 / 4 / 2 / 5" }}>
                    <GreyP>Price</GreyP>
                </div>
                <div style={{ gridArea: "1 / 5 / 2 / 6" }}>
                    <GreyP>Quantity</GreyP>
                </div>
                <div style={{ gridArea: "1 / 6 / 2 / 7" }}>
                    <GreyP>Subtotal</GreyP>
                </div>
            </Container>
            <CartTitle>Cart</CartTitle>
            <Bordered>
                {state.map((item) => <CartItem key={item.id} {...item} />)}
            </Bordered>
            <Total>
                <form style={{ gridArea: "1 / 1 / 2 / 3" }}>
                    <CouponContainer>
                        <StyledInput name="coupon" type="text" placeholder="Coupon code?"/>
                        <StyledInputButton onClick={handleCoupon}>{coupon}</StyledInputButton>
                    </CouponContainer>
                    {/* <GreyP>You saved !</GreyP> handle to insert when checked */}
                </form>
              <div style={{ gridArea: "1 / 3 / 2 / 5", margin: "20px" }}>
                <GreyP>Shipping:</GreyP>
                <p style={{ margin: "0 20px" }}>$9.43</p>
              </div>
              <div style={{ gridArea: "1 / 5 / 2 / 7", margin: "20px" }}>
                <GreyP>Total Calculated:</GreyP>
                <p style={{ margin: "0 20px" }}>${Math.round(total * 100) / 100}</p>
              </div>
              <div style={{ gridArea: "2 / 3 / 3 / 5" }}>
                <StyledButton onClick={() => dispatch(clearCart())}>Clear Cart</StyledButton>
              </div>
              <div style={{ gridArea: "2 / 5 / 3 / 7" }}>
                <StyledButton onClick={handleInventory}>Make purchase</StyledButton>
              </div>
            </Total>
        </Wrapper>
    )
};

//------------------ STYLES ------------------

const Wrapper = styled.div`
    padding: 30px;
`;

const Container = styled.div`
@media only screen and (min-width: 630px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
}
@media screen and (max-width: 760px) {
    display: none;
}
`;

const GreyP = styled.p`
    color: grey;
    margin: 0 20px;
    
`;

const CartTitle = styled.p`
@media only screen and (max-width: 630px) {
    font-size: 20px;
    text-align: center
}
@media screen and (min-width: 629px) {
    display: none;
}
`;

const Bordered = styled.div`
    border-top: 1px solid grey;
`;

const Total = styled.div`
@media only screen and (min-width: 630px) {
    border-top: 1px solid grey;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
}
    display: block;
`;

const CouponContainer = styled.div`
    margin: 20px;
    background: #FF4F40; 
    border: none;
    border-radius: 10px;
    width: 240px; 
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
    margin-right: 5px;
    background: white; 
    border: none;
    border-radius: 4px;
    width: 200px; 
    height: 40px;
    font-size: 15px; 
    text-align: center;
`;

const StyledInputButton = styled.button`
    background: transparent; 
    border: none;
    border-radius: 10px;
    height: 25px;
    width: 25px;

    :hover {
        cursor: pointer;
    }
`;

const StyledButton = styled.div`
    margin: 20px;
    border-radius: 4px;
    background: #164C81;
    width: 200px; 
    color: white; 
    text-transform: uppercase; 
    height: 20px; 
    font-size: 15px; 
    font-weight: 600;
    text-align: center;
    align-content: center;

    :hover {
        cursor: pointer;
    }
`;

export default Cart;

