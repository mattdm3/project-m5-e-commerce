import React from 'react';
import styled from 'styled-components';

const CartItem = ({ id, name, price }) => {
    return (
    <form>
        <Container>
            <Products> image
                {/* <img /> */}
            </Products>
            <Details>
                <GreyP>${price}</GreyP>
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