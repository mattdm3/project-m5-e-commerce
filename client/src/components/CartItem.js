import React, { useState } from "react";
import styled from "styled-components";
import { updateQuantity, removeItem } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleQuantity = (event) => {
      const value = event.target.value;
      dispatch(updateQuantity(props, value));
  }

  return (
    <form>
      <Container>
        <button onClick={() => dispatch(removeItem(props))}>x</button>
        <Products>
          <ImageContainer src={props.imageSrc} />
        </Products>
        <Details>
          <GreyP>{props.price}</GreyP>
          <GreyP>
            <input
              type="number"
              min="1"
              value={props.quantity}
              onChange={handleQuantity}
            />
          </GreyP>
          <GreyP>Subtotal Calculation</GreyP>
        </Details>
      </Container>
    </form>
  );
};

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

const ImageContainer = styled.img`
    width: 100px;
    height: 100px;
    object fit: cover;
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
