import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from "react-router-dom";

const RenderItem = ({ item }) => {


    return (<ImageContainer key={item.id}>
        {/* <div> {item.name.split(" ")[0]} </div> */}
        <img src={item.imageSrc} />
        <TitleContainer>
            <p>{`${item.name.split(" ")[1]} ${item.name.split(" ")[2]} ${item.name.split(" ")[3]} ${item.name.split(" ")[4]}`}</p>
        </TitleContainer>
        <DescriptionContainer>
            <p> {item.category}</p>
            <p>{item.price}</p>
        </DescriptionContainer>
    </ImageContainer>

    )
}

export default RenderItem;

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
    min-height: 405px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const TitleContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex; 
    justify-content: center; 
    width: 100%; 
`

const DescriptionContainer = styled.div`
    position: absolute; 
    align-items: flex-end;
    bottom: 0;
    left: 0px; 
    display: flex; 
    justify-content: space-between;
    width: 100%; 
    height: 100%; 
    cursor: pointer;
    padding: 0 15px; 
    transition-duration: 600ms; 
    opacity: 0; 
    &:hover {
        animation: ${slideUp} 600ms forwards; 
    }
`

