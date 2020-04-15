import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { updateQuantity, removeItem } from "../actions";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const [subtotal, setSubtotal] = useState(props.price);
  const dispatch = useDispatch();

  const handleQuantity = (event) => {
    const value = event.target.value;
    if (value > props.numInStock) {
      return
    } else {
      dispatch(updateQuantity(props, parseInt(value)));
    }

  };

  useEffect(() => {
    setSubtotal(props.price.slice(1) * props.quantity);
  }, [handleQuantity]);

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
          <GreyP>${Math.round(subtotal * 100) / 100}</GreyP>
        </Details>
      </Container>
    </form>
  );
};

//------------------ STYLES ------------------

const Container = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid grey;
`;

const Products = styled.div`
  width: 80px;
  height: 100px;
  flex-grow: 3;
`;

const ImageContainer = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
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
