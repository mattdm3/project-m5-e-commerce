import React from 'react';
import styled from 'styled-components';

const Header = ({ imgSrc, heading }) => {

    return (
        <StyledHeaderImg style={{ backgroundImage: `url(${imgSrc})` }}>
            <h1>{heading}</h1>
        </StyledHeaderImg>
    )
}

const StyledHeaderImg = styled.div`

    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    height: 500px; 
    width: 100%; 
   
    position: relative; 

    h1 {
        position: absolute; 
        bottom: 150px;
        left: 180px;  
        font-size: 3.5rem;
        font-weight: 800; 
    }
`

export default Header;