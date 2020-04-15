import styled from 'styled-components';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsSelector, cartTotalSelector, getItemsAndQuantities } from '../reducers/cart-reducer';
import { clearCart } from '../actions';


// ------------ COMPONENTS ------------
import CartItem from './CartItem';
//-------------------------------------

//````````````` FEEL FREE TO CHANGE THIS UP AND USE GRIDS `````````````

const Cart = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => itemsSelector(state.cartState));
    const total = useSelector(state => cartTotalSelector(state.cartState));
    const purchaseBag = useSelector(state => getItemsAndQuantities(state.cartState));
    console.log('purchaseBag: ', purchaseBag);
    

    const handleInventory = async(event) => {
        let response = await fetch('/updateItemInventory', {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(purchaseBag)
        })
        let data = await response.json();
        await dispatch(clearCart());
        return data
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
            <Bordered>
                {state.map((item) => <CartItem key={item.id} {...item} />)}
            </Bordered>
            <Total>
                <form style={{ gridArea: "1 / 1 / 2 / 3" }}>
                    <StyledInput type="text" placeholder="Coupon code?"/>
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
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
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-items: center;
`;

const StyledInput = styled.input`
    margin: 40px;
    background: none; 
    border: 2px solid red;
    border-radius: 4px;
    width: 200px; 
    font-size: 15px; 
    text-align: center;
`

const StyledButton = styled.div`
    margin: 20px;
    padding: 20px auto;
    background: #164C81;
    width: 235px; 
    color: white; 
    text-transform: uppercase; 
    height: 55px; 
    font-size: 15px; 
    font-weight: 600;
    text-align: center;
    align-content: center;

    :hover {
        cursor: pointer;
    }
`

export default Cart;

