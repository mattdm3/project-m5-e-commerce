import React from 'react';
import styled from 'styled-components';
import { updateQuantity, removeItem } from '../actions';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    
    return (
    <form>
        <Container>
            <button onClick={() => dispatch(removeItem(item.id))}>x</button>
            <Products> image
                <img src={item.imageSrc} />
            </Products>
            <Details>
                <GreyP>{item.price}</GreyP>
                <GreyP><input type="number" min="1" placeholder="1"/></GreyP>
                <GreyP>Subtotal Calculation</GreyP>
            </Details>
        </Container>
    </form>
    )
}

//------------------ STYLES ------------------


const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Products = styled.div`
    width: 80px;
    height: 100px;
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

export default CartItem;