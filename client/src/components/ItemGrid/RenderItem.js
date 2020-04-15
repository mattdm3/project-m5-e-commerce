import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi"
import { addItem } from '../../actions';
import { isInCartSelector } from '../../reducers/cart-reducer';


const RenderItem = ({ item }) => {
    const inCart = useSelector(state => isInCartSelector(state.cartState, item.id));



    const dispatch = useDispatch();

    return (<ImageContainer >


        {/* <div> {item.name.split(" ")[0]} </div> */}
        <img src={item.imageSrc} />
        <TitleContainer>
            <p>{`${item.name.split(" ")[1]} ${item.name.split(" ")[2]} ${item.name.split(" ")[3]}`}</p>
            <Price>{item.price}</Price>
        </TitleContainer>

        <DescriptionContainer>

            {!inCart && item.numInStock > 0 && <StyledBuyBtn onClick={() =>
                dispatch(addItem(item))}>BUY IT NOW <StyledShoppingCart size={15} /> </StyledBuyBtn>
            }

            {inCart && <p>Already in cart</p>}
        </DescriptionContainer>

    </ImageContainer>

    )
}




const slideUp = keyframes`
    from {
        transform: translateY(20px);
        /* opacity: 0;  */
    }
    to {
        transform: translateX(0);
        opacity: 1; 
    }
`

const ImageContainer = styled.div`
    background: white;
    min-width: 200px;
    min-height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 5; 

    &:hover {
        opacity: .8; 
    }
`
const TitleContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    display: flex; 
    justify-content: flex-start; 
    width: 100%; 
    font-size: 1rem;
    font-weight: 500; 
    color: black; 
    /* border-bottom: 2px solid #333333;  */
    padding-bottom: 2px; 
`

const DescriptionContainer = styled.div`
    position: absolute; 
    align-items: flex-end;
    bottom: -4px;
    left: 0px; 
    padding-left: 40px; 
    display: flex; 
    justify-content: space-between;
    width: 100%; 
    height: 100%; 
    /* cursor: pointer; */
    /* padding: 0 15px;  */
    transition-duration: 600ms; 
    opacity: 0; 
    &:hover {
        animation: ${slideUp} 500ms forwards; 
    }    
    
`

const Price = styled.p`
    position: absolute; 
    font-weight: 800; 
    font-size: 1rem; 
    bottom: -25px; 
    left: 0; 
    color: #4A4F6A;
`
const StyledBuyBtn = styled.button`
    bottom: 13px;
    padding: 3px; 
    left: 68px; 
    position: absolute; 
    font-size: .9rem;
    font-weight: 700; 
    background: transparent; 
    letter-spacing: 1px;
    /* padding-bottom:16px; */
    margin: 0; 
    color: #164C81; 
    cursor: pointer;
    border: none;
    text-align: center; 
    border-radius: 5px; 
    align-items:center;
    display: flex; 
   
`

const StyledShoppingCart = styled(FiShoppingCart)`
    margin-left: 5px; 
`


export default RenderItem;